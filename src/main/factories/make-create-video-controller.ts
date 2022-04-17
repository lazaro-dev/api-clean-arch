import { PrismaClientService } from "@/external/database/prisma"
import { CreateVideoController } from "@/presentation/controllers"
import { MysqlVideoRepository } from "@/repositories"
import { CreateVideo } from "@/use-cases"

export const makeCreateVideoController = () => {
    const videoRepository = new MysqlVideoRepository(PrismaClientService)
    const usecase = new CreateVideo(videoRepository)
    const controller = new CreateVideoController(usecase)
    return controller
  }