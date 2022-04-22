import express from "express"
import { router } from "./routes"
//REFATORAR PARA ABSTRAIR
const app = express()

app.use(express.json())
app.use(router)

export { app }