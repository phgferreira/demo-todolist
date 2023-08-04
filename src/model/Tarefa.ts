export default class Tarefa {
    id: number;
    nome: string;
    doing = false;
    done = false;

    constructor (nome: string) {
      this.id = 0;
      this.nome = nome;
    }
}
