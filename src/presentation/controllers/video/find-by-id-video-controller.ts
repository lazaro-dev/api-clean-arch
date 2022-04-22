import { UseCase } from "@src/use-cases/ports";
import { ok, serverError, badRequest } from "@src/presentation/controllers//helpers";
import { HttpRequest } from "../ports/http-request";
import { HttpResponse } from "../ports/http-response";
import { getMissingParams } from "../helpers/validate-fields";
import { MissingParamError } from "../errors/missing-parma-error";

export class FindByIdVideoController {
    constructor(private readonly findById: UseCase){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>
    {
        try {
            const missingParams: string = getMissingParams(httpRequest, ['id'])
            if (missingParams)
                return badRequest(new MissingParamError(missingParams))

            return ok(await this.findById.execute(httpRequest.body.id))
        } catch (error) {
            return serverError('Internal Server Error')
        }
    }
}