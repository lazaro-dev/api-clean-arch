import { app } from "./app"

const port = 8000
const host = '0.0.0.0'
//REFATORAR PARA ABSTRAIR
app.listen(port, host, () => {
    console.log(`Ouvindo na porta ${host} ${port}`)
})