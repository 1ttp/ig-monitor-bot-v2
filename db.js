const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('watchlist.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    channelId TEXT,
    followers INTEGER DEFAULT 0,
    lastStatus TEXT DEFAULT 'active',
    failCount INTEGER DEFAULT 0,
    startTime TEXT DEFAULT (datetime('now')),
    lastChangeTime TEXT,
    createdAt TEXT DEFAULT (datetime('now'))
  )`);
});

module.exports = {
  addAccount: (username, channelId, followers, callback) => {
    db.run(`INSERT OR REPLACE INTO accounts (username, channelId, followers, startTime, lastStatus) 
            VALUES (?, ?, ?, datetime('now'), ?)`,
      [username.toLowerCase(), channelId, followers, 'active'], callback);
  },
  getAccounts: (callback) => db.all('SELECT * FROM accounts WHERE failCount < 3', callback),
  updateStatus: (username, status, callback) => {
    db.run(`UPDATE accounts SET lastStatus = ?, lastChangeTime = datetime('now'), failCount = 0 
            WHERE username = ?`, [status, username.toLowerCase()], callback);
  },
  incrementFail: (username, callback) => {
    db.run('UPDATE accounts SET failCount = failCount + 1 WHERE username = ?', 
      [username.toLowerCase()], callback);
  },
  updateFollowers: (username, followers, callback) => {
    db.run('UPDATE accounts SET followers = ? WHERE username = ?', 
      [followers, username.toLowerCase()], callback);
  },
  getAccount: (username, callback) => {
    db.get('SELECT * FROM accounts WHERE username = ?', [username.toLowerCase()], callback);
  }
};