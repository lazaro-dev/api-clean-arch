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

});