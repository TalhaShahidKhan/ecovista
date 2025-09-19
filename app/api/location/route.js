import { NextResponse } from "next/server";
import { getLocations } from "./location-utils";

export async function GET() {
  const locationData = getLocations();
  return NextResponse.json(locationData);
}
