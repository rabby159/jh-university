import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controller'
import { AnyZodObject } from 'zod'

const router = express.Router()

const validateRequest = (schema : AnyZodObject) =>{
    return async(req: Request, res: Response, Next: NextFunction) =>{

    //data validation using zod
        const zodParseData = await schema.parseAsync({
            
            body: req.body

        })


        Next();
    }
}

router.post('/create-student',validateRequest, UserControllers.createStudent)

export const UserRoutes = router
