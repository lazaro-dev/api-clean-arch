import { InvalidSlugError } from '@/entities/errors/invalid-slug-error';
import { left, right, Either } from '@/shared';
import { Slug } from '@/entities/object-values/slug';
import { CreateVideoDTO } from './create-video-dto';
export class Video {

    private constructor(private _url: string, private _desc: string, private _title: string, 
                        private _slug: Slug, private _screenplay: string)
    {
        // this._url = _url;
        // this._desc = _desc;
        // this._title = _title;
        // this._slug = _slug;
        // this._screenplay = _screenplay;
        Object.freeze(this)
    }

    get url () {
        return this._url
    }

    get desc () {
        return this._desc
    }

    get title () {
        return this._title
    }

    get slug () {
        return this._slug
    }

    get screenplay () {
        return this._screenplay
    }

    public static create(videoDTO: CreateVideoDTO): Either<InvalidSlugError, Video>
    {
        const slugOrError = Slug.create(videoDTO.slug)
        if (slugOrError.isLeft()) {
            return left(new InvalidSlugError(videoDTO.slug))
        }

        return right(new Video(videoDTO.url, videoDTO.desc, videoDTO.title, slugOrError.value as Slug, videoDTO.screenplay))
    }

}