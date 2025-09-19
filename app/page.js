import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense
      fallback={
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white my-4"></div>
      }
    >
      <LocationDetector />
    </Suspense>
  );
}
