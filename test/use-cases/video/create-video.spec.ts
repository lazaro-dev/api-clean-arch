import { CreateVideo } from './../../../src/use-cases/video/create-video';
import { MemoryVideoRepository } from './../../../src/repositories/memory-video-repository';
import { VideoDTO } from '../../../src/domain/entities/video/video-dto';
import { Video } from '../../../src/domain/entities/video/video';

const sut = () => {
    const memoryVideoRepository = new MemoryVideoRepository()
    const createVideoUseCase = new CreateVideo(memoryVideoRepository)
    return {
        memoryVideoRepository,
        createVideoUseCase
    }
}

describe('Create video use case', () => {
    test('should create video with data valid', async () => {
        const { memoryVideoRepository, createVideoUseCase} = sut();
        const httpRequest = {
            body: {
                url: 'https://github.com',
                title: 'Titulo 1',
                filename: 'filename.mp4',
                desc: 'Descricao 1',
                screenplay: 'Qualquer coisa',
                slug: 'titulo+12'
            }
        }
        const videoResponse: VideoDTO = (await createVideoUseCase.execute(httpRequest)).value as Video;
        const video: VideoDTO = await memoryVideoRepository.findById(videoResponse.id);

        expect(video.url).toEqual(videoResponse.url)
        expect(video.desc).toEqual(videoResponse.desc)
        expect(video.title).toEqual(videoResponse.title)
        expect(video.slug).toEqual(videoResponse.slug)
        expect(video.screenplay).toEqual(videoResponse.screenplay)
    });

    test('should not create video with invalid slug', async () => {
        const { createVideoUseCase } = sut();

        const httpRequest = {
            body: {
                url: 'https://github.com',
                title: 'Titulo 1',
                filename: 'filename.mp4',
                desc: 'Descricao 1',
                screenplay: 'Qualquer coisa',
                slug: '_1'
            }
        }

        const response: Error = (await createVideoUseCase.execute(httpRequest)).value as Error;

        expect(response.name).toEqual('InvalidSlugError')
    });
});