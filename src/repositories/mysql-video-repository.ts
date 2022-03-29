import { Video } from '@/domain/entities/video/Video';
import { VideoRepository } from '@/repositories/ports/video-repository';
import { PrismaClient } from '@prisma/client';
import { VideoData } from './ports';

export class MysqlVideoRepository implements VideoRepository 
{
    constructor(private readonly prisma: PrismaClient){}

    async findById(id: string): Promise<VideoData | null> 
    {
        const videoData: VideoData | null = await this.prisma.video.findFirst({
            where: { id }
        })

        return videoData
    }

    async getAll(): Promise<VideoData[]>
    {
        const videoData: VideoData[] = await this.prisma.video.findMany()

        return videoData
    }

    async create(video: Video): Promise<VideoData>
    {
        const newVideo = await this.prisma.video.create({
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