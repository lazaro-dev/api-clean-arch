import { HttpRequest } from "@src/presentation/controllers/ports/http-request"
import { Request, Response } from "express"

export const adaptRoute = (controller: any) => {
    return async (req: Request, res: Response) => {
      const httpRequest: HttpRequest = {
        body: req.body
      }

      const httpResponse = await controller.handle(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}