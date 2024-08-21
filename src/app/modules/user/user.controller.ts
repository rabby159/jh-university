import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'
// import { UserValidation } from './user.validation'

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body

  //will we call services function to send this data
  const result = await UserServices.createStudentIntoDB(password, studentData)

  //send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  })
})

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserServices.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
}
