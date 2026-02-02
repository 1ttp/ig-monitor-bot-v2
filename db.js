const Database = require('better-sqlite3');
const db = new Database('watchlist.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    channelId TEXT,
    followers INTEGER DEFAULT 0,
    lastStatus TEXT DEFAULT 'active',
    failCount INTEGER DEFAULT 0,
    startTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastChangeTime DATETIME,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = {
  addAccount: (username, channelId, followers) => {
    db.prepare(`
      INSERT OR REPLACE INTO accounts (username, channelId, followers, startTime, lastStatus) 
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)
    `).run(username.toLowerCase(), channelId, followers, 'active');
  },
  getAccounts: () => db.prepare('SELECT * FROM accounts WHERE failCount < 3').all(),
  updateStatus: (username, status) => {
    db.prepare(`
      UPDATE accounts SET lastStatus = ?, lastChangeTime = CURRENT_TIMESTAMP, failCount = 0 
      WHERE username = ?
    `).run(status, username.toLowerCase());
  },
  incrementFail: (username) => {
    db.prepare('UPDATE accounts SET failCount = failCount + 1 WHERE username = ?').run(username.toLowerCase());
  },
  updateFollowers: (username, followers) => {
    db.prepare('UPDATE accounts SET followers = ? WHERE username = ?').run(followers, username.toLowerCase());
  },
  getAccount: (username) => db.prepare('SELECT * FROM accounts WHERE username = ?').get(username.toLowerCase())
};
