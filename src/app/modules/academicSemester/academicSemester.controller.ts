import catchAsync from '../../utils/catchAsync'
import { AcademicSemesterServices } from './academicSemester.service'
// import { UserValidation } from './user.validation'

const createAcademicSemester = catchAsync(async (req, res) => {
  //will we call services function to send this data
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )

  //send response
  res.status(200).json({
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  })
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
}
