import { Schema, model } from 'mongoose'
import { UserInterface } from './user.interface'


const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'Other'],
      message: 'Gender must be either Male, Female, or Other.',
    },
    required: [true, 'Gender is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: 'Invalid email format.',
    },
  },
  userPhoto: { type: String },
  userBanner: { type: String },
  birthDate: { type: String },
  country: { type: String },
  contactNumber: { type: String },
  bio: {
    type: String,
    maxlength: [200, 'Bio must not exceed 200 characters.'],
  },
  status: {
    type: String,
    enum: ['admin', 'surveyor', 'user', 'pro-user', 'blocked'],
  },
});

// Export the model
export default model<UserInterface>('User', UserSchema);
