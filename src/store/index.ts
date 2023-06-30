import {createStore} from 'vuex';
import Tarefa from "@/model/Tarefa";

export default createStore({
    state: {
        tarefas: [{ id: 1, nome: 'Tarefa de Teste', doing: false, done: false }] as Tarefa[],
        proximoId: 2,
    },
    getters: {
        concluido(state) {
            return state.tarefas.filter((tarefa) => tarefa.done).length;
        },
        total(state) {
            return state.tarefas.length;
        }
    },
    mutations: {
        adicionar(state, tarefa: Tarefa): void {
            state.tarefas.push(tarefa);
        },
    },
    actions: {
        async criar(context, nome: string) {
            setTimeout(() => {
                const tarefa: Tarefa = new Tarefa(nome);
                tarefa.id = context.state.proximoId;
                context.commit('adicionar', tarefa);
                context.state.proximoId++;
            }, 3000);
        },
        async excluir(context, id: number) {
            setTimeout(() => {
                const indice = context.state.tarefas.findIndex((tarefa) => tarefa.id === id);
                context.state.tarefas.splice(indice);
            }, 3000);
        }
    },
    modules: {}
});
