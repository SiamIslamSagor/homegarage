import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const mechanics = await db
      .collection("mechanics")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(mechanics);
  } catch (error) {
    console.error("Failed to fetch mechanics:", error);
    return NextResponse.json(
      { error: "Failed to fetch mechanics" },
      { status: 500 }
    );
  }
}
