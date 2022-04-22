import { ControllerError } from "./controller-error"
export class MissingParamError extends Error implements ControllerError {
    constructor (param: string) {
      super(`Missing param: ${param} `)
      this.name = 'MissingParamError'
    }
}