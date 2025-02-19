import { rules } from "@directory/data/rules";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({ data: rules });
}
