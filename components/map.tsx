"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

type MapProps = {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
  width?: string;
  showMarker?: boolean;
};

const Map: React.FC<MapProps> = ({
  center,
  zoom = 10,
  height = "500px",
  width = "100%",
  showMarker = true,
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const containerStyle = {
    width,
    height,
  };

  const onLoad = (mapInstance: google.maps.Map) => {
    mapRef.current = mapInstance;

    if (showMarker && window.google?.maps?.marker) {
      // Avoid duplicating the marker
      if (!markerRef.current) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map: mapInstance,
          position: center,
          title: "Location",
        });
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      libraries={["marker"]} // ✅ Important for AdvancedMarkerElement
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default Map;
