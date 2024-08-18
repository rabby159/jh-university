/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose'

export type Guardians = {
  fatherName: string
  fatherOccupation: string
  motherName: string
  motherOccupation: string
}

export type UserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  password: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: Date
  email: string
  contactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardians: Guardians
  profileImg?: string
  admissionSemester: Types.ObjectId
  isDeleted: boolean
  academicDepartment: Types.ObjectId
}

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}
