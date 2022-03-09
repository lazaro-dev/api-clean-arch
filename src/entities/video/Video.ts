import { CreateVideoDTO } from './create-video-dto';
export class Video {
    private url: string
    private desc: string
    private title: string
    private slug: string
    private screenplay: string

    private constructor(videoDTO: CreateVideoDTO)
    {
        this.url = videoDTO.url
        this.desc = videoDTO.desc
        this.title = videoDTO.title
        this.slug = videoDTO.slug
        this.screenplay = videoDTO.screenplay
        Object.freeze(this)
    }

    public static create(videoDTO: CreateVideoDTO)
    {
        return new Video(videoDTO)
    }
}