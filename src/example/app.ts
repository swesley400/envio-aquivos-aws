export class Config {
    teste:  string;
    constructor(teste: string){
        this.teste = teste;
    }

    public getTest(){
        return console.log(this.teste)
    }
}

