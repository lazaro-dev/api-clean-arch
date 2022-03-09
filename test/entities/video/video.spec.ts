import { CreateVideoDTO } from './../../../src/entities/video/create-video-dto';
import { Video } from './../../../src/entities/video/Video';

describe('Video domain entity', () => {
    test('should create video', () => {
        const videoCreateDTO: CreateVideoDTO = {
            url: 'https://github.com',
            title: 'Titulo 1',
            desc: 'Descricao 1',
            screenplay: 'Qualquer coisa',
            slug: 'titulo-1'
        }

        const video = Video.create(videoCreateDTO)

        expect(video).toBeInstanceOf(Video)
    });
});