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
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardians: guardiansSchema,
  profileImg: { type: String, required: true },
  isActive: {
    type: String,
    enum: ['active', 'irregular'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
