import { Videos } from "../models/videos";

interface SaveVideoInterface {
    videoTitle: string;
    videoName: string;
    videoUrl: string;
    videoDescription: string;
    statusDaAprovacao: boolean;
}

async function saveVideo(body: any) {
    try {
        const video: any = await Videos.create(body)
        const { id } = video
        if (id) {
            return ({
                status: "ok",
                code: 200,
                message: "Cadastrado com sucesso"
            })
        }
        else {
            return ({
                status: "error",
                code: 500,
                message: "Erro no servidor"
            })
        }

    }
    catch (err: any) {
        return ({
            status: "error",
            code: 500,
            message: err.mesage
        })
    }
}

export default saveVideo
