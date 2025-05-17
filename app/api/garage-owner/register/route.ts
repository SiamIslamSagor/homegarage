import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { GarageOwnerFormData } from "@/types/garage-owner";

export async function POST(request: Request) {
  try {
    const body: GarageOwnerFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "number",
      "address",
      "ownerNIDImageUrl",
      "garageName",
      "garageAddress",
      "garageTradeLicenseUrl",
    ];
    const missingFields = requiredFields.filter(
      field => !body[field as keyof GarageOwnerFormData]
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
    const garageOwnerData = {
      ...body,
      role: "garage_owner",
      status: "pending", // pending, approved, rejected
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert into database
    const result = await db
      .collection("garage_owners")
      .insertOne(garageOwnerData);

    if (!result.insertedId) {
      throw new Error("Failed to insert garage owner data");
    }

    return NextResponse.json({
      message: "Garage owner registration successful",
      garageOwnerId: result.insertedId,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to register garage owner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
