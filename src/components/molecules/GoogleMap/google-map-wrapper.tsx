'use client';
import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

interface GoogleMapsWrapperProps {
  children: React.ReactNode;
}

const GoogleMapsWrapper = ({ children }: GoogleMapsWrapperProps) => {
  //   const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const apiKey = 'AIzaSyAXTLC4WKjKJKb4UKPnW6M90lkXgnN2fOU';
  if (!apiKey) {
    return <div>Oops! Cannot display the map: Google Maps API key missing</div>;
  }
  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};

export default GoogleMapsWrapper;
