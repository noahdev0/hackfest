import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`http://172.20.10.11:1337/api/events/${id}`);
  const data = await res.json();
  if (data.error) {
    return NextResponse.json({ error: data.error }, { status: 404 });
  }
  const attributes = data.attribute;

  return NextResponse.json({ attributes });
}
