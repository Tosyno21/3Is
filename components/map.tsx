"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
  zoom = 50,
  height = "500px",
  width = "100%",
  showMarker = true,
}) => {
  const containerStyle = {
    width,
    height,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {showMarker && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
