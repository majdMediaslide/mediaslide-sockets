import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validateRequest =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    next();
  };
export default validateRequest;
