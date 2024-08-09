import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {}

  //if client use default password
  userData.password = password || (config.default_pass as string)

  //set student role
  userData.role = 'student'

  //set manually generated id
  userData.id = '202410001'

  //create user
  const newUser = await User.create(userData) //build in static method

  //create a student
  if (Object.keys(newUser).length) {
    //set id, _id as a user
    studentData.id = newUser.id
    studentData.user = newUser._id //reference id

    const newStudent = Student.create(studentData)

    return newStudent
  }
}

export const userServices = {
  createStudentIntoDB,
}
