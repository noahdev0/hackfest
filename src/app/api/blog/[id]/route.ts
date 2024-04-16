import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`http://172.20.10.11:1337/api/posts/${id}`);
  const data = await res.json();
  if (data.error) {
    return NextResponse.json({ error: data.error }, { status: 404 });
  }

  return NextResponse.json(data);
}
