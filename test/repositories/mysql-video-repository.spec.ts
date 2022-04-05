import { Video } from "../../src/domain/entities/video/Video"
import { VideoDTO } from "../../src/domain/entities/video/video-dto"
import { PrismaClient } from "@prisma/client";
import { MysqlVideoRepository } from "../../src/repositories/mysql-video-repository"
import { VideoData } from "../../src/repositories/ports";

const validVideoCreateDTO: VideoDTO = {
    url: 'https://github.com',
    title: 'Titulo 1',
    filename: 'filename.mp4',
    desc: 'Descricao 1',
    screenplay: 'Qualquer coisa',
    slug: 'titulo'
}

const validVideoCreateDTO1: VideoDTO = {
    url: 'https://github.com',
    title: 'Titulo 2',
    filename: 'filename1.mp4',
    desc: 'Descricao 2',
    screenplay: 'Qualquer coisa',
    slug: 'titulo-1'
}

describe('Create video use case', () => {
    let prisma: PrismaClient;

    beforeAll(() => prisma = new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL_TEST,
            },
        },
    }))

    afterAll(() => prisma.$disconnect())

    beforeEach(async () => {
        await prisma.video.deleteMany({})
    })

    test('should be able to save a video', async () => {
        const mysqlRepository = new MysqlVideoRepository(prisma)
        const video: Video = Video.create(validVideoCreateDTO).value as Video
        const videoResponse: VideoData = await mysqlRepository.create(video);
        const videoRaw = await prisma.video.findUnique({
            where: {
                id: videoResponse.id
            }
        })

        expect(videoRaw.slug).toEqual(videoResponse.slug)
        expect(videoRaw.title).toEqual(videoResponse.title)
    });

    test('should be able find video by id', async () => {
        const mysqlRepository = new MysqlVideoRepository(prisma)
        const newVideo = await prisma.video.create({
            data: {
                url: validVideoCreateDTO.url,
                filename: validVideoCreateDTO.filename,
                desc: validVideoCreateDTO.desc,
                title: validVideoCreateDTO.title,
                slug: validVideoCreateDTO.slug,
                screenplay: validVideoCreateDTO.screenplay,
            },
        });
        const videoResponse: VideoData = await mysqlRepository.findById(newVideo.id);

        expect(newVideo.id).toEqual(videoResponse.id)
        expect(newVideo.slug).toEqual(videoResponse.slug)
    });

    test('should be able return all videos', async () => {
        const mysqlRepository = new MysqlVideoRepository(prisma)
        const newVideo = await prisma.video.create({
            data: {
                url: validVideoCreateDTO.url,
                filename: validVideoCreateDTO.filename,
                desc: validVideoCreateDTO.desc,
                title: validVideoCreateDTO.title,
                slug: validVideoCreateDTO.slug,
                screenplay: validVideoCreateDTO.screenplay,
            },
        });
        const newVideo1 = await prisma.video.create({
            data: {
                url: validVideoCreateDTO1.url,
                filename: validVideoCreateDTO1.filename,
                desc: validVideoCreateDTO1.desc,
                title: validVideoCreateDTO1.title,
                slug: validVideoCreateDTO1.slug,
                screenplay: validVideoCreateDTO1.screenplay,
            },
        });
        const videoResponse: VideoData[] = await mysqlRepository.getAll();

        expect(videoResponse.length).toEqual(2)
        // expect(videoResponse[0].id).toContain(newVideo.id)
        // expect(videoResponse[1].id).toEqual(newVideo1.id)
    });
});