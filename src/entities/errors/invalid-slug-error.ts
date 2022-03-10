export class InvalidSlugError extends Error implements EntityError {
    constructor (slug: string) {
      super(`The slug "${slug}" is invalid.`)
      this.name = 'InvalidSlugError'
    }
  }