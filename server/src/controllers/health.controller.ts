import { Request, Response } from "express";
import { OK } from "../config/constant";

export const getHealthCheckUp = (req: Request, res: Response) => {
  res.status(OK).json({ message: "I'm healthy :)" });
};
