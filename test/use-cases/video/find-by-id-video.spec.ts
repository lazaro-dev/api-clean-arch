import { MemoryVideoRepository } from "../../../src/repositories/memory-video-repository";
import { FindByIdVideo } from "../../../src/use-cases/video/find-by-id-video";
import { VideoData } from "../../../src/repositories/ports/dtos/video-data";

describe('Find video use case', () => {
 
    test('should be able find video by id', async () => {
        
        const memoryVideoRepository = new MemoryVideoRepository()
        const findByIdVideoUseCase = new FindByIdVideo(memoryVideoRepository)
        
        const videoResponse: VideoData = await findByIdVideoUseCase.execute('newVideo.id');

        // expect(newVideo.id).toEqual(videoResponse.id)
        // expect(newVideo.slug).toEqual(videoResponse.slug)
    });

});