import { NextFunction, Router, request, response } from "express";
import multer from 'multer'
import controllerVideoSaveData from '../controller/videoController'


const route = Router();

const upload = multer({ dest: 'uploads/' })

function validarDadosVideo(req: any, res: any, next: NextFunction) {
    const { videoTitle, videoName, videoUrl, videoDescription, statusDaAprovacao } : any = req.body;
  
    if (!videoTitle || !videoName || !videoUrl || !videoDescription || statusDaAprovacao === undefined) {
      res.status(400).json({ error: 'Dados incompletos na requisição' });
    } else {
      next(); // Todos os dados estão presentes, então passa para o próximo middleware
    }
  }
  

route.post('/sendfile', upload.single('image'), (req, res) => {
    const file = req.file

    res.status(200).json({
        status: "Ok",
        fileInfomation: file
    })
})


route.post('/reciveinoformationarquivos', validarDadosVideo, async (req, res, next) => {
    const {status, code, message} = await controllerVideoSaveData(req.body)
    res.status(code).json({status, code, message})
})

export default route