import { Schema, model } from 'mongoose';

const VoteSchema: Schema = new Schema(
  {
    surveyId: {
      type: String,
      required: [true, 'Survey ID is required.'],
    },
    voterName: {
      type: String,
      required: [true, 'Voter name is required.'],
      minlength: [3, 'Voter name must be at least 3 characters long.'],
      maxlength: [50, 'Voter name must not exceed 50 characters.'],
    },
    voterEmail: {
      type: String,
      required: [true, 'Voter email is required.'],
      validate: {
        validator: function (v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Validates email format
        },
        message: 'Invalid email format.',
      },
    },
    response: {
      type: String,
      enum: {
        values: ['Yes', 'No'],
        message: 'Response must be either Yes or No.',
      },
      required: [true, 'Response is required.'],
    },
  },
  {
    timestamps: true, 
  },
);

export const Vote = model('Vote', VoteSchema);
