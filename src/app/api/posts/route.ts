import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/posts?populate=*`
  );
  const data = await res.json();
  const { data: posts } = data;

  return NextResponse.json(posts);
}
