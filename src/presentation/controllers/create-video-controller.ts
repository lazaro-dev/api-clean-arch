import { UseCase } from "@/use-cases/ports";
import { ok, serverError, badRequest } from "@/presentation/controllers//helpers";
import { HttpRequest } from "./ports/http-request";
import { HttpResponse } from "./ports/http-response";
import { MissingParamError } from "./errors/missing-parma-error";
import { getMissingParams } from "./helpers/validate-fields";

export class CreateVideoController {
    constructor(private readonly createVideo: UseCase){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>
    {
        try {
            const missingParams: string = getMissingParams(httpRequest, ['url', 'title', 'slug', 'filename'])
            if (missingParams)
                return badRequest(new MissingParamError(missingParams))

            const videoOrError = await this.createVideo.execute(httpRequest)
            if(videoOrError.isLeft())
                return badRequest(videoOrError.value)

            return ok(videoOrError.value)
        } catch (error) {
            return serverError('Internal Server Error')
        }
    }
}