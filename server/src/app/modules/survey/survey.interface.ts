export interface surveyInterface {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoto?: string;
  question: string;
  description: string;
  subject: string;
  totalVotes: number;
  status: "active" | "inactive";
}