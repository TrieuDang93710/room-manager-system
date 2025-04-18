import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import InputTypeEnum from '@/enum/input-type.enum';
import { checkEmail } from '@/helpers/validate';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleBlurChecking(
  type: string,
  field: string,
  value: string,
  setValue: (field: string, val: string) => void,
  passConfirm?: string
) {
  if (value.trim() === '') {
    setValue(field, 'This field cannot be left blank.');
  } else {
    if (type === InputTypeEnum.EMAIL) {
      const result: string = checkEmail(value);
      if (result) {
        setValue(field, result);
      } else {
        setValue(field, '');
      }
    } else if (type === InputTypeEnum.PASSWORD) {
      const errors: string[] = [];
      // const errors: string[] = checkPassword(value);

      let error: string;

      error = errors !== null ? (error = errors.join('; ')) : (error = '');

      setValue(field, error);
    } else if (type === InputTypeEnum.PASSWORD_CONFIRM) {
      const isPassConfirm = value.toString() === passConfirm?.toString();
      if (isPassConfirm === false) {
        setValue(field, 'Password confirm is not match with password.');
      } else {
        setValue(field, '');
      }
    } else {
      setValue(field, '');
      console.log('Input submitted:', value);
    }
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
