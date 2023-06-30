import {createStore} from 'vuex';
import Tarefa from "@/model/Tarefa";

export default createStore({
    state: {
        tarefas: [{ id: 1, nome: 'Tarefa de Teste', doing: false, done: false }] as Tarefa[],
        proximoId: 2,
    },
    getters: {
        tarefa(state, id: number) {
            return state.tarefas.find((tarefa) => tarefa.id === id);
        }
    },
    mutations: {
        adicionar(state, tarefa: Tarefa): void {
            state.tarefas.push(tarefa);
        },
    },
    actions: {
        async criar(state, nome: string) {
            setTimeout(() => {
                console.log(`Tarefa ${nome} criada com sucesso`);
            }, 3000);
        },
        async excluir(state, id: number) {
            setTimeout(() => {
                console.log(`Tarefa de id ${id} excluída com sucesso`);
            }, 3000);
        }
    },
    modules: {}
});
