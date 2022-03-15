import { CreateVideo } from './../../../src/use-cases/video/create-video';
import { MemoryVideoRepository } from './../../../src/repositories/memory-video-repository';
import { CreateVideoDTO } from '../../../src/domain/entities/video/create-video-dto';
import { Video } from '../../../src/domain/entities/video/video';

const validVideoCreateDTO: CreateVideoDTO = {
    url: 'https://github.com',
    title: 'Titulo 1',
    desc: 'Descricao 1',
    screenplay: 'Qualquer coisa',
    slug: 'titulo'
}

describe('Create video use case', () => {
    test('should create video with data valid', async () => {

        const memoryVideoRepository = new MemoryVideoRepository()
        const createVideoUseCase = new CreateVideo(memoryVideoRepository)

        const videoResponse: Video = (await createVideoUseCase.execute(validVideoCreateDTO)).value as Video;
        const video: Video = await memoryVideoRepository.findById(videoResponse.id);

        expect(video.url).toEqual(videoResponse.url)
        expect(video.desc).toEqual(videoResponse.desc)
        expect(video.title).toEqual(videoResponse.title)
        expect(video.slug.value).toEqual(videoResponse.slug.value)
        expect(video.screenplay).toEqual(videoResponse.screenplay)
    });

    test('should not create video with data valid', async () => {

        // const video: Video = Video.create(validVideoCreateDTO).value as Video

        // expect(video.url).toEqual(validVideoCreateDTO.url)
        // expect(video.desc).toEqual(validVideoCreateDTO.desc)
        // expect(video.title).toEqual(validVideoCreateDTO.title)
        // expect(video.slug.value).toEqual(validVideoCreateDTO.slug)
        // expect(video.screenplay).toEqual(validVideoCreateDTO.screenplay)
    });
});