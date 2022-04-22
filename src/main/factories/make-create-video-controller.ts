import { PrismaClientService } from "../../external/database/prisma"
import { CreateVideoController } from "@src/presentation/controllers"
import { MysqlVideoRepository } from "@src/repositories"
import { CreateVideo } from "@src/use-cases"

export const makeCreateVideoController = () => {
  const videoRepository = new MysqlVideoRepository(PrismaClientService)
  const usecase = new CreateVideo(videoRepository)
  const controller = new CreateVideoController(usecase)
  return controller
}