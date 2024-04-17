import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/events`);
  const data = await res.json();
  const { data: events } = data;

  return NextResponse.json(events);
}
