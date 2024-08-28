import mongoose, { Schema } from 'mongoose'
import { TSemesterRegistration } from './semesterRegistration.interface'
import { SemesterRegistrationStatus } from './semesterRegistration.constant'

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'AcademicSemester',
    },
    status: {
      type: String,
      enum: SemesterRegistrationStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    maxCredit: {
      type: Number,
      default: 13,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
  },
  {
    timestamps: true,
  },
)

export const SemesterRegistration = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
)

/* boil plate
const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>({});


export const SemesterRegistration = mongoose.model<TSemesterRegistration>('SemesterRegistration', semesterRegistrationSchema)

*/
