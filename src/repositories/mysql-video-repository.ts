import { Video } from '@/domain/entities/video/Video';
import { prismaClient } from '@/external/database/prisma';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { VideoData } from './ports';

export class MysqlVideoRepository implements VideoRepository 
{
    async findById(id: string): Promise<VideoData | null> 
    {
        const videoData: VideoData | null = await prismaClient.video.findFirst({
            where: { id }
        })

        return videoData
    }

    async getAll(): Promise<VideoData[]>
    {
        const videoData: VideoData[] = await prismaClient.video.findMany()

        return videoData
    }

    async create(video: Video): Promise<VideoData>
    {
        const newVideo = await prismaClient.video.create({
            data: {
                url: video.url,
                filename: video.filename,
                desc: video.desc,
                title: video.title,
                slug: video.slug.value,
                screenplay: video.screenplay,
            },
        });

        return newVideo
    }
}