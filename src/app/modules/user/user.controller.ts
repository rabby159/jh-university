import { userServices } from './user.service'
import { UserValidation } from './user.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
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
  } catch (err) {
    res.status(500).json({
      success: true,
      message: 'Something went wrong',
      error: err,
    })
  }
}
