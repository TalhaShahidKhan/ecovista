import { NextResponse } from "next/server";
import { getLocationByName } from "../location-utils";

export async function GET(request, { params }) {
  const locationName = (await params).name;
  const locationData = getLocationByName(locationName);
  return NextResponse.json(locationData);
}
