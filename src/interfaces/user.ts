interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  account_type: string[];
  isActive: boolean;
  code_id: string;
  code_expired: string;
  role: string[];
  address: string;
  lessor: string;
}

export default IUser;
