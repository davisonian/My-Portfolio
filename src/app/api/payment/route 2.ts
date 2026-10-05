import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { message: "Payments are disabled in this build." },
    { status: 200 },
  );
}
