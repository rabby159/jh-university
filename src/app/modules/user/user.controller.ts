import { userServices } from './user.service'
import catchAsync from '../../utils/catchAsync'
// import { UserValidation } from './user.validation'

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body

  //data validation using zod
  //   const zodParseData = UserValidation.parse(studentData)

  //will we call services function to send this data
  const result = await userServices.createStudentIntoDB(password, studentData)

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
