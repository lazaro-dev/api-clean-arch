import { UseCase } from '@/use-cases/ports/use-case';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { VideoData } from '@/repositories/ports';

export class FindByIdVideo implements UseCase
{
    constructor(private videoRepository: VideoRepository){}

    async execute(id: string): Promise<VideoData>
    {
        return await this.videoRepository.findById(id) as VideoData;
    }
}