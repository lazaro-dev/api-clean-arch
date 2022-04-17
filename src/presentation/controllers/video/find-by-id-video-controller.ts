import { UseCase } from "@/use-cases/ports";
import { create, serverError, badRequest } from "@/presentation/controllers//helpers";
import { HttpRequest } from "../ports/http-request";
import { HttpResponse } from "../ports/http-response";
import { getMissingParams } from "../helpers/validate-fields";
import { MissingParamError } from "../errors/missing-parma-error";

export class FindByIdVideo {
    constructor(private readonly createVideo: UseCase){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>
    {
        try {
            const missingParams: string = getMissingParams(httpRequest, ['url', 'title', 'slug', 'filename'])
            if (missingParams)
                return badRequest(new MissingParamError(missingParams))

            const videoOrError = await this.createVideo.execute(httpRequest.body.id)
            if(videoOrError.isLeft())
                return badRequest(videoOrError.value)

            return create(videoOrError.value)
        } catch (error) {
            return serverError('Internal Server Error')
        }
    }
}