import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  return res.json({
    status: "success",
    data: [],
  });
};
