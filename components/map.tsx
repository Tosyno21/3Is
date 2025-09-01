"use client";

import React, { useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

type LatLng = {
  lat: number;
  lng: number;
};

type MapProps = {
  center: LatLng;
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

  const containerStyle = { width, height };

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    if (!showMarker) return;

    if (window.google?.maps?.marker && !markerRef.current) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        title: "Selected Location",
      });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      libraries={["marker"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={handleMapLoad}
        options={{
          disableDefaultUI: false,
          clickableIcons: false,
          mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
        }}
      />
    </LoadScript>
  );
};

export default Map;
