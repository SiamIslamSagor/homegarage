import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { MechanicFormData } from "@/types/garage-owner";

export async function POST(request: Request) {
  try {
    const body: MechanicFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "number",
      "address",
      "ownerNIDImageUrl",
      "specialization",
      "experience",
      "certificateUrl",
    ];
    const missingFields = requiredFields.filter(
      field => !body[field as keyof MechanicFormData]
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
    const mechanicData = {
      ...body,
      role: "mechanic",
      status: "pending", // pending, approved, rejected
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert into database
    const result = await db.collection("mechanics").insertOne(mechanicData);

    if (!result.insertedId) {
      throw new Error("Failed to insert mechanic data");
    }

    return NextResponse.json({
      message: "Mechanic registration successful",
      mechanicId: result.insertedId,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to register mechanic",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
