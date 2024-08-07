import config from '../../config'
import { TStudent } from '../student/student.interface'
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
  const result = await User.create(userData) //build in static method

  //create a student
  if (Object.keys(result).length) {
    //set id, _id as a user
    studentData.id = result.id
    studentData.user = result._id
  }

  return result
}

export const userServices = {
  createStudentIntoDB,
}
