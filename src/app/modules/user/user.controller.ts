import { RequestHandler } from 'express'
import { userServices } from './user.service'
// import { UserValidation } from './user.validation'

const createStudent: RequestHandler = async (req, res, Next) => {
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
    Next(err)
  }
}

export const UserControllers = {
  createStudent,
}
