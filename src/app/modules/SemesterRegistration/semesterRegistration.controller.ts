import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { Request, Response } from 'express'
import { SemesterRegistrationServices } from './semesterRegistration.service'

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
        req.body,
      )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration is created successfully',
      data: result,
    })
  },
)

const getAllSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.getAllSemesterRegistrationFromDB(
        req.query,
      )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration are retrieved successfully',
      data: result,
    })
  },
)

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result =
      await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration are retrieved successfully',
      data: result,
    })
  },
)

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await SemesterRegistrationServices.updateSemesterRegistrationIntoDB(id, req.body);
    
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration are update successfully',
      data: result,
    })
  },
)

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
}

/*

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result = await
    
    
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration is created successfully',
      data: result,
    })
  },
)

export const SemesterRegistrationController = {
  createSemesterRegistration,
}

*/
