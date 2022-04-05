import { UseCase } from "@/use-cases/ports";
import { ok } from "./helpers/http-helper";
import { HttpRequest } from "./ports/http-request";
import { HttpResponse } from "./ports/http-response";

export class CreateVideoController {
    constructor(private readonly createVideo: UseCase){}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse>
    {
        
        return ok('')
    }
}