import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //checking semester name and code are matching or not

  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
  }

  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Spring: '01',
    Fall: '02',
    Summer: '03',
  }

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code. Please Enter right code')
  }

  const result = await AcademicSemester.create(payload)

  return result
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
}
