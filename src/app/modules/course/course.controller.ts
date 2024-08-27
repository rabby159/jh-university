import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CourseServices } from './course.service'
// import { UserValidation } from './user.validation'

const createCourse = catchAsync(async (req, res) => {
  //will we call services function to send this data
  const result = await CourseServices.createCourseIntoDB(req.body)

  //send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is created successfully',
    data: result,
  })
})

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses are retrieved successfully',
    data: result,
  })
})

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.getSingleCourseFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved successfully',
    data: result,
  })
})

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.updateCourseIntoDB(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved successfully',
    data: result,
  })
})

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.deleteCoursesFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved successfully',
    data: result,
  })
})

const assignFaculties = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const { faculties } = req.body

  const result = await CourseServices.(courseId, faculties)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Assign faculties is retrieved successfully',
    data: result,
  })
})

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
  updateCourse,
  assignFaculties
}
