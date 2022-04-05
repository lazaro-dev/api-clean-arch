//Copy of https://github.com/otaviolemos/thewisepad-core/blob/master/src/presentation/controllers/web-controller.ts
import { HttpRequest } from "../ports/http-request"

export const getMissingParams = (request: HttpRequest, requiredParams: string[]): string => {
    const missingParams: string[] = []
    requiredParams.forEach(function (name) {
      if (!Object.keys(request.body).includes(name)) {
        missingParams.push(name)
      }
    })
    return missingParams.join(', ')
}