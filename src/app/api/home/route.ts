import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/home?populate=deep`
  );
  const data = await res.json();

  return NextResponse.json(data);
}
