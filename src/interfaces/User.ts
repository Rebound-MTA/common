export interface User {
  id: string;
  email: string;
  role?: string;
  profile?: {
    fullName?: string;
    avatarUrl?: string;
  };
  billing?: {
    cardLast4?: string;
    plan?: string;
  };
}
