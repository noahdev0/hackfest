import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/events/${id}?populate=*`
  );
  const data = await res.json();
  if (data.error) {
    return NextResponse.json({ error: data.error }, { status: 404 });
  }

  return NextResponse.json(data);
}
