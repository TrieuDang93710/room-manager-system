'use client';
import flex from '@/config/flex.config';
import { addSingleMarkers } from '@/helpers/utils';
import { useEffect, useRef } from 'react';

// Gurgaon coordinates
const DEFAULT_CENTER = { lat: 28.4595, lng: 77.0266 };
// You can change this according to your needs, or you can also recive this as a prop to make map component more reusable.
const DEFAULT_ZOOM = 7;

interface GoogleMapsProps {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
}

const GoogleMaps = ({ locations }: GoogleMapsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM
      });
      // New Single Marker code
      addSingleMarkers({ locations, map });
    }
  }, [ref, locations]);

  return <div ref={ref} className={'w-[90%] h-[100vh] m-auto ' + flex({ justifyContent: 'center' })}></div>;
};

export default GoogleMaps;
