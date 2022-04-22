import { Router } from "express";
import { adaptRoute } from "./adapters/express-route";
import { makeCreateVideoController } from "./factories/make-create-video-controller";
import { makeFindByIdVideoController } from "./factories/make-find-by-id-video-controller";
import { makeGetAllVideoController } from "./factories/make-get-all-video-controller";

const router = Router()
//REFATORAR PARA ABSTRAIR
router.get('/videos', adaptRoute(makeGetAllVideoController()))

router.get('/videos/:id', adaptRoute(makeFindByIdVideoController()))

router.post('/videos', adaptRoute(makeCreateVideoController()))


export { router }