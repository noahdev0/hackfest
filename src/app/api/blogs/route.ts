import { NextResponse } from "next/server";

export function GET() {
  const data = { id: "1" };
  return NextResponse.json({ data });
}