import { Either, left, right } from '@/shared/either';
import { InvalidSlugError } from '@/domain/errors/invalid-slug-error';
import { Video } from '../../domain/entities/video/Video';
import { UseCase } from '@/use-cases/ports/use-case';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { VideoDTO } from '@/domain/entities/video/video-dto';
import { HttpRequest } from '@/presentation/controllers/ports/http-request';
import { SlugGenerateService } from '@/external/services';

export class CreateVideo implements UseCase
{
    constructor(private videoRepository: VideoRepository){}

    async execute(request: HttpRequest): Promise<Either<InvalidSlugError, VideoDTO>> 
    {
        const videoDTO: VideoDTO = {
            url: request.body.url,
            title: request.body.title,
            filename: request.body.filename,
            desc: request.body?.desc,
            screenplay: request.body?.screenplay,
            slug: SlugGenerateService.convertStringToSlug(request.body.slug)
        }

        const videoOrError = Video.create(videoDTO)
        if (videoOrError.isLeft()) {
          return left(videoOrError.value)
        }

        return right(await this.videoRepository.create(videoOrError.value as Video));
    }
}