import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://172.20.10.11:1337/api/events");
  const data = await res.json();
  const { data: events } = data;

  return NextResponse.json(events);
}
