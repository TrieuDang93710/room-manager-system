interface RoomProps {
  _id?: number;
  name?: string;
  description?: string;
  price?: number;
  status?: boolean;
  numOfRoom?: number;
  rentPerRoom?: [];
  typeOfRoom?: string;
  hidden?: boolean;
  approved?: boolean;
  removed?: boolean;
  requires?: string;
  createBy?: string;
  images?: [];
  ratings?: [];
  createdAt?: string;
  updatedAt?: string;
}

export default RoomProps;
