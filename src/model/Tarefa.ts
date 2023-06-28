export default class Tarefa {
    id: number;
    nome: string;
    doing: boolean;
    done: boolean;

    constructor(nome: string) {
        this.id = 0;
        this.nome = nome;
        this.doing = false;
        this.done = false;
    }
}