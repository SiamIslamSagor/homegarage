import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; // Adjusted import path

export async function GET(request: Request) {
  try {
    const { db } = await connectToDatabase();

    return NextResponse.json({
      message: "Successfully connected to MongoDB and pinged the database!",
      connectedToDB: db.databaseName,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to connect to MongoDB or an API error occurred.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
