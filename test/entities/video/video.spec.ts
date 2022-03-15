import { CreateVideoDTO } from './../../../src/domain/entities/video/create-video-dto';
import { Video } from '../../../src/domain/entities/video/video';

const validVideoCreateDTO: CreateVideoDTO = {
    url: 'https://github.com',
    title: 'Titulo 1',
    desc: 'Descricao 1',
    screenplay: 'Qualquer coisa',
    slug: 'titulo'
}

describe('Video domain entity', () => {
    test('should create video with data valid', () => {

        const video: Video = Video.create(validVideoCreateDTO).value as Video

        expect(video.url).toEqual(validVideoCreateDTO.url)
        expect(video.desc).toEqual(validVideoCreateDTO.desc)
        expect(video.title).toEqual(validVideoCreateDTO.title)
        expect(video.slug.value).toEqual(validVideoCreateDTO.slug)
        expect(video.screenplay).toEqual(validVideoCreateDTO.screenplay)
    });
});