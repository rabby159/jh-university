import { Types } from 'mongoose'

export type TSemesterRegistration = {
  academicSemester: Types.ObjectId
  status: 'UPCOMING' | 'ONGOING' | 'ENDED'
  startDate: Date
  endDate: Date
  maxCredit: number
  minCredit: number
}

// export type TSemesterRegistration = {}  //boil plate
