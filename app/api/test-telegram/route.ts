// app/api/test-telegram/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_ADMIN_ID,
            text: "Тестовое сообщение 🥊 с Vercel"
        }),
    });

    return NextResponse.json({ success: true });
}