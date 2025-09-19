import NoLocationInfo from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({ params, searchParams }) => {
  const location = (await params).location;
  const latitude = (await searchParams).latitude;
  const longitude = (await searchParams).longitude;
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default TemperaturePage;
