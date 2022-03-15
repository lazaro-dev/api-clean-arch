import { Either, left, right } from '@/shared/either';
import { InvalidSlugError } from '@/domain/errors/invalid-slug-error';
import { Video } from '../../domain/entities/video/Video';
import { UseCase } from '@/use-cases/ports/use-case';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { CreateVideoDTO } from '@/domain/entities/video/create-video-dto';

export class CreateVideo implements UseCase
{
    constructor(private videoRepository: VideoRepository){}

    async execute(request: CreateVideoDTO): Promise<Either<InvalidSlugError, Video>> 
    {
        const videoOrError = Video.create(request)
        if (videoOrError.isLeft()) {
          return left(videoOrError.value)
        }

        return right(await this.videoRepository.create(videoOrError.value as Video));
    }
}