import catchAsync from '../../utils/catchAsync'
// import { UserValidation } from './user.validation'

const createAcademicSemester = catchAsync(async (req, res) => {
  //const { password, student: studentData } = req.body

  //will we call services function to send this data
  //const result = await userServices.createStudentIntoDB(password, studentData)

  //send response
  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
}
