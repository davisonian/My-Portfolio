import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: 200,
    revalidated: false,
    message: "Sanity revalidation is disabled in this build.",
  });
}
