export class ServerError extends Error implements ControllerError {
    constructor (msg: string) {
      super(`Server error: ${msg}`)
      this.name = 'ServerError'
    }
}