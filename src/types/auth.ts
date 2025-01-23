export type UserRole = 'seeker' | 'lister';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}