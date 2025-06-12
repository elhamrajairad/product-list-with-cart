import { NextResponse } from "next/server";

const BASE_URL = "http://localhost:30001/deserts";

export async function GET() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const deserts = await response.json();
    return NextResponse.json(deserts, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch deserts",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
