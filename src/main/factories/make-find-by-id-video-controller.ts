import { PrismaClientService } from "@src/external/database/prisma"
import { FindByIdVideoController } from "@src/presentation/controllers"
import { MysqlVideoRepository } from "@src/repositories"
import { FindByIdVideo } from "@src/use-cases"

export const makeFindByIdVideoController = () => {
    const videoRepository = new MysqlVideoRepository(PrismaClientService)
    const usecase = new FindByIdVideo(videoRepository)
    const controller = new FindByIdVideoController(usecase)
    return controller
  }