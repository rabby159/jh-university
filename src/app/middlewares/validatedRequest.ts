import { AnyZodObject } from 'zod'
import { NextFunction, Request, Response } from 'express'

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, Next: NextFunction) => {
    try {
      //data validation using zod
      await schema.parseAsync({
        body: req.body,
      })

      Next()
    } catch (err) {
      Next(err)
    }
  }
}

export default validateRequest
