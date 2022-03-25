import { Video } from '../../domain/entities/video/Video';

export interface VideoRepository {
    findById(id: string): Promise<any>;
    getAll(): Promise<any>;
    create(video: Video): Promise<any>;
}