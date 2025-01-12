export interface voteInterface {
  surveyId: string;
  voterName: string;
  voterEmail: string;
  response: 'Yes' | 'No';
  createdAt?: Date;
  updatedAt?: Date;
}