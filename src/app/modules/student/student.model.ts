import { Schema, model } from 'mongoose'
import { Guardians, Student, UserName } from './student.interface'

const guardiansSchema = new Schema<Guardians>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
})

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
    maxlength: [15, 'First name maximum length is 15'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'last name is required'],
    maxlength: [15, 'Last name maximum length is 15'],
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardians: {
    type: guardiansSchema,
    required: true,
  },
  profileImg: { type: String, required: true },
  isActive: {
    type: String,
    enum: ['active', 'irregular'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
