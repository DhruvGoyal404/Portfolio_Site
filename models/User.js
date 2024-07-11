// models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }, //email verifyer lagan hai, unique true krna h, not a human thing also
  password: { type: String, required: true },
  // Add more fields as needed
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
