import { MemoryVideoRepository } from "../../../src/repositories/memory-video-repository";
import { FindByIdVideo } from "../../../src/use-cases/video/find-by-id-video";
import { VideoData } from "../../../src/repositories/ports/dtos/video-data";
import { Video } from "../../../src/domain/entities/video/Video";

const validVideoCreateData: VideoData = {
    url: 'https://github.com',
    title: 'Titulo 1',
    filename: 'titulo.mp4',
    desc: 'Descricao 1',
    screenplay: 'Qualquer coisa',
    slug: 'titulo'
}

const validVideoCreateData1: VideoData = {
    url: 'https://github.com',
    title: 'Titulo 2',
    filename: 'titulo2.mp4',
    desc: 'Descricao 2',
    screenplay: 'Qualquer coisa 2',
    slug: 'titulo-2'
}

describe('Find video use case', () => {
 
    test('should be able find video by id', async () => {
        const video1: Video = Video.create(validVideoCreateData).value as Video;
        const video2: Video = Video.create(validVideoCreateData1).value as Video;

        const memoryVideoRepository = new MemoryVideoRepository([video1, video2])
        const findByIdVideoUseCase = new FindByIdVideo(memoryVideoRepository)
        
        const videoResponse: VideoData = await findByIdVideoUseCase.execute(video1.id);
        const videoResponse2: VideoData = await findByIdVideoUseCase.execute(video2.id);

        expect(video1.id).toEqual(videoResponse.id)
        expect(video2.id).toEqual(videoResponse2.id)
    });

});