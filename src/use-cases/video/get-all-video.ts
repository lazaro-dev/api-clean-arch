import { UseCase } from '@src/use-cases/ports/use-case';
import { VideoRepository } from '@src/repositories/ports/video-repository';
import { VideoData } from '@src/repositories/ports';

export class GetAllVideo implements UseCase
{
    constructor(private videoRepository: VideoRepository){}

    async execute(): Promise<VideoData[]>
    {
        return await this.videoRepository.getAll() as VideoData[];
    }
}