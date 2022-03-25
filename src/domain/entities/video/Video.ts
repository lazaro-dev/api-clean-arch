import { InvalidSlugError } from '@/domain/errors/invalid-slug-error';
import { left, right, Either } from '@/shared';
import { Slug } from '@/domain/object-values/slug';
import { VideoDTO } from './video-dto';
import { v4 as uuidv4 } from 'uuid';

export class Video {

    private constructor(private _url: string, private _title: string, 
                        private _slug: Slug, private _screenplay: string | null, private _filename: string, private _desc: string | null, private _id?: string)
    {
        this._id = this._id ? this._id : uuidv4();//Dependencia de boa para pequenas e medias aplicações
        Object.freeze(this)
    }

    get id () {
        return this._id
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
    
    get filename () {
        return this._filename
    }
    public static create(videoDTO: VideoDTO): Either<InvalidSlugError, Video>
    {
        const slugOrError = Slug.create(videoDTO.slug)
        if (slugOrError.isLeft()) {
            return left(new InvalidSlugError(videoDTO.slug))
        }

        return right(new Video(videoDTO.url, videoDTO.title, slugOrError.value as Slug, videoDTO.screenplay, videoDTO.filename, videoDTO.desc, videoDTO?.id))
    }

}