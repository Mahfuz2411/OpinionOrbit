import { Schema, model } from 'mongoose';

const SurveySchema: Schema = new Schema({
    userId: {
      type: String,
      required: [true, 'User ID is required.'],
    },
    userName: {
      type: String,
      required: [true, 'User name is required.'],
      minlength: [3, 'User name must be at least 3 characters long.'],
      maxlength: [50, 'User name must not exceed 50 characters.'],
    },
    userEmail: {
      type: String,
      required: [true, 'User email is required.'],
      unique: true,
      validate: {
        validator: function (v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Invalid email format.',
      },
    },
    userPhoto: {
      type: String,
    },
    question: {
      type: String,
      required: [true, 'Question is required.'],
      minlength: [5, 'Question must be at least 5 characters long.'],
      maxlength: [200, 'Question must not exceed 200 characters.'],
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
      minlength: [10, 'Description must be at least 10 characters long.'],
      maxlength: [500, 'Description must not exceed 500 characters.'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required.'],
      minlength: [3, 'Subject must be at least 3 characters long.'],
      maxlength: [100, 'Subject must not exceed 100 characters.'],
    },
    totalVotes: {
      type: Number,
      default: 0,
      min: [0, 'Total votes cannot be negative.'],
    },
    status: {
      type: String,
      enum: {
        values: ['active', 'inactive'],
        message: 'Status must be either active or inactive.',
      },
      required: [true, 'Status is required.'],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const Survey = model('Survey', SurveySchema);
