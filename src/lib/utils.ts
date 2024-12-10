import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleBlurChecking(field: string, value: string, setValue: (field: string, val: string) => void) {
  if (!value.trim()) {
    setValue(field, 'This field cannot be left blank.');
  } else {
    setValue(field, '');
    console.log('Input submitted:', value);
  }
}

export const addSingleMarkers = ({
  locations,
  map
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) =>
  locations.map(
    (position) =>
      new google.maps.Marker({
        position,
        map
      })
  );

export const getCoordinates = async (address: string) => {
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiKey = 'AIzaSyAXTLC4WKjKJKb4UKPnW6M90lkXgnN2fOU';
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
  );
  const data = await response.json();

  if (data.status === 'OK') {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } else {
    throw new Error(data.status);
  }
};
