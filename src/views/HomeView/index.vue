<template>
  <h1>Home Page</h1>
    <v-container class="pa-16">
        <v-text-field v-model="tarefa" placeholder="Digite a tarefa e tecle Enter" @keyup.enter="adicionarTarefa" append-inner-icon="mdi-magnify" />
        <v-list :lines="'one'">
            <v-list-item v-for="tar in tarefas" :key="tar" :title="tar" />
        </v-list>
    </v-container>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
    name: 'HomeView',
    setup() {
        let tarefa = ref('');
        let tarefas: string[] = [];

        function adicionarTarefa() {
            tarefas.push(tarefa.value);
            tarefa.value = '';
        }

        return { tarefa, tarefas, adicionarTarefa}
    }
}
</script>
