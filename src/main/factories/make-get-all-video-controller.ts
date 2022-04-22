import { PrismaClientService } from "@src/external/database/prisma"
import { GetAllVideoController } from "@src/presentation/controllers"
import { MysqlVideoRepository } from "@src/repositories"
import { GetAllVideo } from "@src/use-cases"

export const makeGetAllVideoController = () => {
    const videoRepository = new MysqlVideoRepository(PrismaClientService)
    const usecase = new GetAllVideo(videoRepository)
    const controller = new GetAllVideoController(usecase)
    return controller
  }