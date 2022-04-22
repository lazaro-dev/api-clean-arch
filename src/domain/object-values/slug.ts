import { InvalidSlugError } from '@src/domain/errors/invalid-slug-error';
import { left, right, Either } from '@src/shared/either';
import { valid } from "@src/domain/validators";

export class Slug {


    private constructor(public readonly value: string)
    {
        Object.freeze(this)
    }

    public static create(value: string): Either<InvalidSlugError, Slug> 
    {
        if(!valid(value)){
            return left(new InvalidSlugError(value))
        }

        return right(new Slug(value))
    }
}