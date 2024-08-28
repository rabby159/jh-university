import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { Request, Response } from 'express'

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

const getAllSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result = await 
    
    
    
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
    const { semesterRegistrationId } = req.params
    const result = await 
    
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester registration are retrieved successfully',
      data: result,
    })
  },
);

const updateSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {

      const { semesterRegistrationId } = req.params
      const result = await 
      
      
      
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester registration are retrieved successfully',
        data: result,
      })
    },
  )

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
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
