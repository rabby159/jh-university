import mongoose from 'mongoose'
import { Student } from './student.model'
import AppError from '../../errors/appError'
import httpStatus from 'http-status'
import { User } from '../user/user.model'
import { TStudent } from './student.interface'
import { studentSearchableFields } from './student.constant'

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query } // copying req.query object so that we can mutate the copy object

  let searchTerm = ''

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string
  }

  // WE ARE DYNAMICALLY DOING IT USING LOOP
  const searchQuery = Student.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  })

  // FILTERING fUNCTIONALITY:

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields']
  excludeFields.forEach((el) => delete queryObj[el]) // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY

  const result = await searchQuery
    .find(query)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  return result
}

const updatedStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardians, ...remainingStudentData } = payload

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  }

  /*
    guardians: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Rabby'
    name.lastName = 'Abe'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value
    }
  }

  if (guardians && Object.keys(guardians).length) {
    for (const [key, value] of Object.entries(guardians)) {
      modifiedUpdatedData[`guardians.${key}`] = value
    }
  }

  //console.log(modifiedUpdatedData)

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession()

  try {
    session.startTransaction()

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student')
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user')
    }

    session.commitTransaction()
    session.endSession()

    return deletedStudent
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (err) {
    session.abortTransaction()
    session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student')
  }
}

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updatedStudentIntoDB,
  deleteStudentFromDB,
}
