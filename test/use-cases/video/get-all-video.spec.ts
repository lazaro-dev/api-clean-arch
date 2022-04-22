import { MemoryVideoRepository } from "../../../src/repositories/memory-video-repository";
import { GetAllVideo } from "../../../src/use-cases/video/get-all-video";
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

describe('Get all videos use case', () => {
 
    test('should be able all videos', async () => {
        const video1: Video = Video.create(validVideoCreateData).value as Video;
        const video2: Video = Video.create(validVideoCreateData1).value as Video;

        const memoryVideoRepository = new MemoryVideoRepository([video1, video2])
        const findByIdVideoUseCase = new GetAllVideo(memoryVideoRepository)
        
        const videoResponse: VideoData[] = await findByIdVideoUseCase.execute();

        expect(videoResponse.length).toEqual(2)
        expect(videoResponse[0].id).toEqual(video1.id)
    });

});