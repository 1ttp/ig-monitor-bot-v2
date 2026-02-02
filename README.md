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

## 🚀 **QUICK START** *(90 seconds)*

```bash
git clone https://github.com/1ttp/ig-monitor-bot-v2
cd ig-monitor-bot-v2
npm install
cp .env.example .env
# Add your Discord token to .env
npm start

## Commands

| Command | Description | Usage | Access |
|---------|-------------|-------|--------|
| `!banwatch` | Monitor an Instagram account for bans | `!banwatch <username>` | All allowed users |
| `!unbanwatch` | Monitor a banned account for reactivation | `!unbanwatch <username>` | All allowed users |
| `!banlist` | View all accounts being monitored for bans | `!banlist` | All allowed users |
| `!unbanlist` | View all accounts being monitored for unbans | `!unbanlist` | All allowed users |
| `!giveaccess` | Grant bot access to a new user | `!giveaccess <user_id>` | Admin only |
| `!help` | Display help message with all commands | `!help` | All users |
| `!fake` | Generate a test embed (demo purposes) | `!fake` | All allowed users |


🎖️ BrahmjotCodez(1ttp)
