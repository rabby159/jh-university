import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../utils/sendResponse'
import httpStatus from 'http-status'

const getAllStudents = async (
  req: Request,
  res: Response,
  Next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB()

    res.status(200).json({
      success: true,
      message: 'Student details get successfully',
      data: result,
    })
  } catch (err) {
    Next(err)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  Next: NextFunction,
) => {
  try {
    const { studentId } = req.params

    const result = await StudentServices.getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'Single Student details get successfully',
      data: result,
    })
  } catch (err) {
    Next(err)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
