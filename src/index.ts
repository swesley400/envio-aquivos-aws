import express from 'express';
import https from 'https';
import fs from 'fs';
import {Videos} from './models/videos';

import sendFile from './routes/sendArquivo';

const video = {
    "videoTitle":  "Novinha gostosa sendo macetada",
    "videoName": "12464798799ascnahdbaccasda",
    "videoUrl":  "https://sashashashsa.com.br",
    "videoDescription": "Novinha sendo macetada com gosto da melhor forma",
    "statusDaAprovacao": false,
}

Videos.sync({ alter: true });
    
const app = express();
const port = 3000;

app.use(express.json());

app.get('', (req, res) =>{
    res.send({status: "Hello Word"})
})

app.get('/status', (req, res) =>{
    res.status(200).json({
        api_name: "Wesley HTTPS API",
        status_code: 200,
    })
})

app.use(sendFile)

// setInterval(() =>{
//     console.log("Execution 1 segundo")
// }, 1000)

console.log("Oi")

https.createServer({
    key: fs.readFileSync('keys/server.key'),
    cert: fs.readFileSync('keys/server.crt'),
}, app).listen(port, ()=> {
    console.log("Server execution in https://localhost:" + port)
})


