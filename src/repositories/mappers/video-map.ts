import { VideoDTO } from '@/domain/entities/video/video-dto';
import { Video } from '@/domain/entities/video/Video';
import { Mapper } from '@/main/mapper/mapper';

export class VideoMap extends Mapper<Video> {
    public static toDomain (raw: any): Video | null {
      const vidDto = {
        url: raw.url,
        title: raw.title,
        slug: raw.slug,
        screenplay: raw.screenplay,
        filename: raw.filename,
        desc: raw.desc,
        id: raw.id,
      };
      const videoOrError = Video.create(vidDto);
      return videoOrError.isRight() ? (videoOrError.value as Video) : null;
    }
  
    // public static toPersistence (video: Video): any {
    //   return {
    //     id: video.id,
    //     url: video.url,
    //     title: video.title,
    //     slug: video.slug.value,
    //     screenplay: video.screenplay,
    //     filename: video.filename,
    //     desc: video.desc,
    //   }
    // }
  
    public static toDTO (video: Video): VideoDTO {
      return {
        id: video.id,
        url: video.url,
        title: video.title,
        slug: video.slug.value,
        screenplay: video.screenplay,
        filename: video.filename,
        desc: video.desc,
      }
    }
  }