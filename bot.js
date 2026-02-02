let monitoringActive = false;
function startMonitoring() {
  if (monitoringActive) return;
  monitoringActive = true;

  const loop = () => {
    db.getAccounts((err, accounts) => {
      if (err) {
        console.error('DB error:', err);
        setTimeout(loop, 60000);
        return;
      }
      
      console.log(`🔄 [${new Date().toLocaleTimeString()}] Checking ${accounts.length} accounts`);

      let completed = 0;
      accounts.forEach(account => {
        checkAccount(account.username).then(data => {
          if (!data) {
            db.incrementFail(account.username, () => {});
            if (++completed === accounts.length) setTimeout(loop, (240 + Math.random() * 360) * 1000);
            return;
          }

          db.updateFollowers(account.username, data.followers, () => {});

          if (account.lastStatus === 'active' && data.banned) {
            sendNotification(account.channelId, account.username, data);
            db.updateStatus(account.username, 'banned', () => {});
          } else if (account.lastStatus === 'banned' && data.active) {
            sendNotification(account.channelId, account.username, data);
            db.updateStatus(account.username, 'active', () => {});
          }

          if (++completed === accounts.length) setTimeout(loop, (240 + Math.random() * 360) * 1000);
        });
      });
    });
  };
  loop();
}
