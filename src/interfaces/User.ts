import { Filters } from "./Filters";
import { Location } from "./Location";
export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  bio?: string;
  password: string;
  role?: string[];
  profile?: {
    avatarUrl?: string;
  };
  location?: Location;
  preferences?: Filters[];
  createdAt?: Date;
  updatedAt?: Date;
}
