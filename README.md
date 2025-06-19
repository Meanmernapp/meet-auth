# 📹🔐 Video Meetings with Phone Number Authentication in Next.js 14 (App Router)

This guide walks through building a secure video calling app in **Next.js 14** using:

- **NextAuth.js v5** (OAuth + phone number login)
- **Daily.co** for embedded video rooms
- **Infobip or Twilio** for phone-based OTP login
- Server-side session handling and protected routes

---

## 🔧 Tech Stack

- [Next.js 14 (App Directory)](https://nextjs.org/docs/app)
- [NextAuth.js v5](https://authjs.dev/)
- [Daily.co](https://www.daily.co/) (WebRTC meetings)
- [Infobip](https://www.infobip.com/) or [Twilio](https://www.twilio.com/) (for SMS OTP)
- [Prisma](https://www.prisma.io/) + PostgreSQL (optional, for persistence)

---

## 🚀 Features

- ✅ Google + GitHub OAuth with NextAuth
- ✅ Phone number authentication with OTP
- ✅ Create & join video rooms securely
- ✅ Server-side and client-side session usage
- ✅ Fully protected meeting route
- ✅ Extendable for chat, screen share, recording

---

## 🛠 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/Meanmernapp/meet-auth.git
cd video-auth-app
npm install
