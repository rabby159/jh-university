import catchAsync from '../../utils/catchAsync'
import { UserServices } from './user.service'
// import { UserValidation } from './user.validation'

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body

  //will we call services function to send this data
  const result = await UserServices.createStudentIntoDB(password, studentData)

  //send response
  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

export const UserControllers = {
  createStudent,
}
