import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNameCodeMapper,
  TMonths,
} from './academicSemester.interface'

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const AcademicSemesterName: TAcademicSemesterName[] = [
  'Spring',
  'Fall',
  'Summer',
]

export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03']

  //checking semester name and code are matching or not
export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Spring: '01',
    Fall: '02',
    Summer: '03',
  }
