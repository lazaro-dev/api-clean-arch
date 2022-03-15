import { Video } from '@/domain/entities/video/Video';
import { VideoRepository } from '@/repositories/ports/video-repository';

export class MemoryVideoRepository implements VideoRepository {
    private videos: Video[] = []

    findById(id: string): Promise<Video | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.videos.find(vid => vid.id == id) ?? null)
            }, 1000);
        })
    }

    getAll(): Promise<Video[]> {
        throw new Error('Method not implemented.');
    }

    create(video: Video): Promise<Video> {
        return new Promise((resolve, reject) => {
            this.videos.push(video)
            setTimeout(() => {
                resolve(video)
            }, 1000);
        })
    }
}