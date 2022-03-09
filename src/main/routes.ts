import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    return res.status(200).send('Hello World Express with Docker Teste 23!')
})

export { router }