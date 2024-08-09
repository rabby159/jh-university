export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type academicSemester = {
  name: 'Spring' | 'Fall' | 'Summer'
  year: Date
  code: '01' | '02' | '03'
  startMonth: Month
  endMonth: Month
}
