import { Router } from "express";
import { makeCreateVideoController } from "./factories/make-create-video-controller";

const router = Router()

router.get('/videos', (req, res) => {
    return res.status(200).send('Hello World Express with Docker Teste 23!')
})

router.get('/videos/:id', (req, res) => {
    return res.status(200).send('Hello World Express with Docker Teste 23!')
})

router.post('/videos', (req, res) => makeCreateVideoController().handle(req))


export { router }