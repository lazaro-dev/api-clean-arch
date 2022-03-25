import { VideoDTO } from '@/domain/entities/video/video-dto';
import { Video } from '@/domain/entities/video/Video';
import { prismaClient } from '@/external/database/prisma';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { VideoMap } from './mappers/video-map';

export class MysqlVideoRepository implements VideoRepository {

    async findById(id: string): Promise<VideoDTO | null> {
        throw new Error('Method not implemented.');
    }

    async getAll(): Promise<VideoDTO[]> {
        throw new Error('Method not implemented.');
    }

    async create(video: Video): Promise<Video> {
        throw new Error('Method not implemented.');
        // const newVideo = await prismaClient.video.create({
        //     data: {
        //         url: video.url,
        //         filename: video.filename,
        //         desc: video.desc,
        //         title: video.title,
        //         slug: video.slug.value,
        //         screenplay: video.screenplay,
        //     },
        // });

        // return VideoMap.toDomain(newVideo)
    }
}