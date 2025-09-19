import NoLocationInfo from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({ params, searchParams }) => {
  const location = (await params).location;
  const latitude = (await searchParams).latitude;
  const longitude = (await searchParams).longitude;
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default WindPage;
