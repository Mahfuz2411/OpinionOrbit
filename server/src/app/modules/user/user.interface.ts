export interface UserInterface {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  password: string;
  userPhoto?: string;
  userBanner?: string;
  birthDate?: string;
  country?: string;
  contactNumber?: string;
  bio?: string;
  status?: 'admin' | 'surveyor' | 'user' | 'pro-user' | 'blocked';
}
