import { NextRequest, NextResponse } from 'next/server';
import PocketBase from 'pocketbase';
import { sendContactNotification } from '@/lib/mailer';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const record = await pb.collection('messages').create({ name, email, message });

    try {
      await sendContactNotification({ name, email, message });
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError);
    }

    return NextResponse.json({ success: true, record });
  } catch (err: any) {
    console.error("❌ API Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
