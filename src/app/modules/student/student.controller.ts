import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

//higher order function
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, Next: NextFunction) => {
    Promise.resolve(fn(req, res, Next)).catch((err) => Next(err))
  }
}

const getAllStudents: RequestHandler = catchAsync(async (req, res, Next) => {
  const result = await StudentServices.getAllStudentFromDB()

  res.status(200).json({
    success: true,
    message: 'Student details get successfully',
    data: result,
  })
})

const getSingleStudent: RequestHandler = catchAsync(async (req, res, Next) => {
  const { studentId } = req.params

  const result = await StudentServices.getSingleStudentFromDB(studentId)

  res.status(200).json({
    success: true,
    message: 'Single Student details get successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    })
  },
)

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
