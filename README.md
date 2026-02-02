# 🚨 InstaMonitor Bot v2.0

**Production Discord bot** that monitors Instagram accounts for **bans** and **unbans** with **real-time follower counts** and **exact time tracking**.

[![GitHub stars](https://img.shields.io/github/stars/1ttp/ig-monitor-bot-v2?style=social)](https://github.com/1ttp/ig-monitor-bot-v2)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/github/license/1ttp/ig-monitor-bot-v2)](https://github.com/1ttp/ig-monitor-bot-v2/blob/main/LICENSE)

## ✨ **Features**

| Feature | Status |
|---------|--------|
| 🎯 **Dual Monitoring** (`!banwatch` + `!unbanwatch`) | ✅ |
| 👥 **Live Follower Counts** | ✅ |
| ⏱️ **Exact Time Tracking** | ✅ |
| 🛡️ **Crash-Proof SQLite** | ✅ |
| 🤖 **Human-Like Timing** | ✅ |
| 📱 **Termux Ready** | ✅ |
| ☁️ **VPS/Cloud Ready** | ✅ |
| 🚫 **No Proxy Needed** | ✅ (7-14 days) |

## 🚀 **Quick Start (90 Seconds)**

```bash
git clone https://github.com/1ttp/ig-monitor-bot-v2
cd ig-monitor-bot-v2
npm install
cp .env.example .env
# Edit .env → Add your Discord bot token
npm start```

## 📱 **Commands**

| Command | Monitors | Example | Alert Trigger |
|---------|----------|---------|---------------|
| `!banwatch <username>` | **Active → BANNED** | `!banwatch instagram` | 🚫 **BANNED!** |
| `!unbanwatch <username>` | **BANNED → Active** | `!unbanwatch banneduser` | ✅ **UNBANNED!** |

##  💎 Sample Alerts

Ban Monitoring Started:
👀 INSTAGRAM - MONITORING STARTED
👥 Followers: 1,234,567
✅ Status: ACTIVE
⏰ Started: 2 minutes ago

🚨 BANNED Alert
🚫 INSTAGRAM **BANNED!**
👥 Followers: 1,234,500
⏱️ Time Tracked: 6h 23m
📅 Banned: Feb 2, 2026 8:23 PM

Unban Monitoring Started:
🔍 BANNEDUSER - UNBAN MONITOR STARTED
👥 Followers: N/A
🚫 Status: BANNED
⏰ Started: 3 minutes ago

✅ UNBANNED Alert
✅ BANNEDUSER **UNBANNED!**
👥 Followers: 1,245,000
⏱️ Time Tracked: 4h 12m
📅 Active: Feb 2, 2026 11:35 PM

## ⚙️ Complete Setup

1. Discord Bot Creation
1. https://discord.com/developers/applications → New Application
2. Bot tab → Add Bot → Reset Token → 📋 Copy
3. Enable "Message Content Intent" 
4. OAuth2 → bot scope → Copy invite → Add to server

2. Local Setup
npm install
cp .env.example .env
echo "DISCORD_TOKEN=your_token_here" > .env
npm start

3. Termux (Android)
pkg install nodejs git
termux-setup-storage
git clone https://github.com/1ttp/ig-monitor-bot-v2
cd ig-monitor-bot-v2
npm install
cp .env.example .env
termux-wake-lock
npm start

## 🛠️ File Structure
├── bot.js          # Main Discord bot
├── db.js           # SQLite database
├── .env.example    # Token template
├── package.json    # Dependencies
├── .gitignore      # Security
└── README.md       # This file

## 🚨 **Troubleshooting**

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Invalid Token** | `DISCORD_TOKEN invalid` | Reset token in [Discord Developer Portal](https://discord.com/developers/applications) → Bot → Reset Token |
| **Missing db.js** | `Cannot find module 'db'` | Run `npm install` |
| **Database Error** | `watchlist.db locked` / `SQLITE_BUSY` | Delete `watchlist.db` → `rm watchlist.db` |
| **Termux Crashes** | Bot stops when screen off | Run `termux-wake-lock` before `npm start` |
| **No Notifications** | Commands work but no alerts | 1. Check bot permissions<br>2. Verify channel ID<br>3. Bot needs "Send Messages" permission |
| **Instagram Blocks** | `HTTP 429` / `Fetch failed` | Normal after 7-14 days. Restart or use VPS |
| **Bot Offline** | `npm start` crashes | Check `console.log` errors. Run `npm install` again |
| **No Follower Count** | Shows `N/A` followers | Instagram changed HTML. Ban detection still works |
| **Slow Checks** | >10 min between checks | Normal human-like timing (4-10 mins random) |

📄 LicenseMIT License - Free for commercial use.
## 🎖️ Created by BrahmjotCodez(1ttp)
