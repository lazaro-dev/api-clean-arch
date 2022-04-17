import { VideoMap } from './mappers/video-map';
import { Video } from '@/domain/entities/video/Video';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { VideoData } from './ports';

export class MemoryVideoRepository implements VideoRepository {

    constructor(private videos: Video[] = []){}

    async findById(id: string): Promise<VideoData | null> 
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.videos.find(vid => vid.id == id);
                resolve(result ? VideoMap.toData(result): null)
            }, 100);
        })
    }

    async getAll(): Promise<VideoData[]> 
    {
        return this.videos.map(vid => VideoMap.toData(vid))
    }

    async create(video: Video): Promise<VideoData> 
    {
        return new Promise((resolve, reject) => {
            this.videos.push(video)
            setTimeout(() => {
                resolve(VideoMap.toData(video))
            }, 100);
        })
    }
}