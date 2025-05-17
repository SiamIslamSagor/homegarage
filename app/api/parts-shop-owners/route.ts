import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const partsShopOwners = await db
      .collection("parts_shop_owners")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(partsShopOwners);
  } catch (error) {
    console.error("Failed to fetch parts shop owners:", error);
    return NextResponse.json(
      { error: "Failed to fetch parts shop owners" },
      { status: 500 }
    );
  }
}
