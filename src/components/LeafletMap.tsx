"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";
import Image from "next/image";

// Fix marker icons (Next.js SSR issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function LeafletMap() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md relative border-4 border-[#D9D9D9]">
      {!hasError ? (
        <MapContainer
          center={[28.46, 77.03]}
          zoom={13}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            eventHandlers={{
              tileerror: () => {
                setHasError(true);
              },
            }}
          />
          {/* TODO: Remove this later */}
          {/* <Marker position={[51.505, -0.09]}>
            <Popup>Hello from Leaflet!</Popup>
          </Marker> */}
        </MapContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white">
          {/* TODO: Finalize the fallback svg */}
          {/* <Image src="/map.svg" alt="Map" width={40} height={40} /> */}
          <Image src="/india.svg" alt="Map" fill className="object-contain" />
        </div>
      )}
    </div>
  );
}
