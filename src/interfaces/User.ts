import { Filters } from "./Filters";

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role?: string[];
  profile?: {
    avatarUrl?: string;
  };
  preferences?: Filters[];
  createdAt?: Date;
  updatedAt?: Date;
}
