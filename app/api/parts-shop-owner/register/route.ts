import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { PartsShopOwnerFormData } from "@/types/garage-owner";

export async function POST(request: Request) {
  try {
    const body: PartsShopOwnerFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "number",
      "address",
      "shopName",
      "shopAddress",
      "shopType",
      "trifoldImageUrl",
    ];
    const missingFields = requiredFields.filter(
      field => !body[field as keyof PartsShopOwnerFormData]
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Add additional fields
    const shopOwnerData = {
      ...body,
      role: "parts_shop_owner",
      status: "pending", // pending, approved, rejected
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert into database
    const result = await db
      .collection("parts_shop_owners")
      .insertOne(shopOwnerData);

    if (!result.insertedId) {
      throw new Error("Failed to insert parts shop owner data");
    }

    return NextResponse.json({
      message: "Parts shop owner registration successful",
      shopOwnerId: result.insertedId,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to register parts shop owner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
