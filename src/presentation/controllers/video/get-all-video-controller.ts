import { UseCase } from "@src/use-cases/ports";
import { ok, serverError } from "@src/presentation/controllers//helpers";
import { HttpRequest } from "../ports/http-request";
import { HttpResponse } from "../ports/http-response";

export class GetAllVideoController {
    constructor(private readonly getAll: UseCase){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>
    {
        try {
            return ok(await this.getAll.execute(httpRequest))
        } catch (error) {
            return serverError('Internal Server Error' + error)
        }
    }
}