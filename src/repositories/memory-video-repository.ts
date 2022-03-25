import { VideoMap } from './mappers/video-map';
import { VideoDTO } from '@/domain/entities/video/video-dto';
import { Video } from '@/domain/entities/video/Video';
import { VideoRepository } from '@/repositories/ports/video-repository';

export class MemoryVideoRepository implements VideoRepository {
    private videos: Video[] = []

    async findById(id: string): Promise<VideoDTO | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.videos.find(vid => vid.id == id);
                resolve(result ? VideoMap.toDTO(result): null)
            }, 100);
        })
    }

    async getAll(): Promise<VideoDTO[]> {
        throw new Error('Method not implemented.');
    }

    async create(video: Video): Promise<VideoDTO> {
        return new Promise((resolve, reject) => {
            this.videos.push(video)
            setTimeout(() => {
                resolve(VideoMap.toDTO(video))
            }, 100);
        })
    }
}