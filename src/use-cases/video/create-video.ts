import { Either, left, right } from '@src/shared/either';
import { InvalidSlugError } from '@src/domain/errors/invalid-slug-error';
import { Video } from '../../domain/entities/video/Video';
import { UseCase } from '@src/use-cases/ports/use-case';
import { VideoRepository } from '@src/repositories/ports/video-repository';
import { VideoDTO } from '@src/domain/entities/video/video-dto';
import { HttpRequest } from '@src/presentation/controllers/ports/http-request';
import { SlugGenerateService } from '@src/external/services';

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