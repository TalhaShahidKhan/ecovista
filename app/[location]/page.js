import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationFound";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function Home({ params, searchParams }) {
  const location = (await params).location;
  const latitude = (await searchParams).latitude;
  const longitude = (await searchParams).longitude;
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
