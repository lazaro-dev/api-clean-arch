import { UseCase } from '@src/use-cases/ports/use-case';
import { VideoRepository } from '@src/repositories/ports/video-repository';
import { VideoData } from '@src/repositories/ports';

export class FindByIdVideo implements UseCase
{
    constructor(private videoRepository: VideoRepository){}

    async execute(id: string): Promise<VideoData>
    {
        return await this.videoRepository.findById(id) as VideoData;
    }
}