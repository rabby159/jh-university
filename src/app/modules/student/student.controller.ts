import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB()

  res.status(200).json({
    success: true,
    message: 'Student details get successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params

  const result = await StudentServices.getSingleStudentFromDB(studentId)

  res.status(200).json({
    success: true,
    message: 'Single Student details get successfully',
    data: result,
  })
})

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  })
})

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
}
