import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const garageOwners = await db
      .collection("garage_owners")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(garageOwners);
  } catch (error) {
    console.error("Failed to fetch garage owners:", error);
    return NextResponse.json(
      { error: "Failed to fetch garage owners" },
      { status: 500 }
    );
  }
}
