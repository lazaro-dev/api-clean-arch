import { MemoryVideoRepository } from "../../src/repositories/memory-video-repository";
import { CreateVideo } from "../../src/use-cases/video/create-video";
import { CreateVideoController } from "../../src/presentation/controllers/video/create-video-controller";
import { HttpResponse } from "../../src/presentation/controllers/ports/http-response";

const sut = () => {
    const memoryVideoRepository = new MemoryVideoRepository()
    const createVideoUseCase = new CreateVideo(memoryVideoRepository)
    const createVideoController = new CreateVideoController(createVideoUseCase)
    return {
        memoryVideoRepository,
        createVideoUseCase,
        createVideoController
    }
}

describe('Create video controller', () => {
    test('should create video with data valid', async () => {
        const { createVideoController} = sut();

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

        const response: HttpResponse = await createVideoController.handle(httpRequest)
        expect(response.statusCode).toEqual(201)
    });

});