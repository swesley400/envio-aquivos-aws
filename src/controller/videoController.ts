import saveVideo from "../repository/video";

interface SaveVideoInterface {
    videoTitle: string;
    videoName: string;
    videoUrl: string;
    videoDescription: string;
    statusDaAprovacao: boolean;
}


async function controllerVideoSaveData(body: SaveVideoInterface) {
    return await saveVideo(body)
}

export default controllerVideoSaveData