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

## 🚀 **# QUICK START (90 SECONDS)**

```bash
**git clone https://github.com/1ttp/ig-monitor-bot-v2**
**cd ig-monitor-bot-v2**
**npm install**
**cp .env.example .env**
# Edit .env → Add your Discord bot token
**npm start**

 ## 📱 **# COMMANDS** *(Click to copy!)*

<div align="center">

| **Command** | **Monitors** | **Example** | **Alert Trigger** |
|-------------|--------------|-------------|-------------------|
| `!banwatch &lt;username&gt;` | **Active → BANNED** | `!banwatch instagram` | **🚫 BANNED!** |
| `!unbanwatch &lt;username&gt;` | **BANNED → Active** | `!unbanwatch banneduser` | **✅ UNBANNED!** |

</div>



