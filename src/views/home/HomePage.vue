<template>
    <h1>Home Page</h1>
    <v-container class="pa-16 container">
      <v-text-field
          v-model="nomeTarefa"
          :autofocus="true"
          placeholder="Digite a tarefa"
          @keyup="handleKeyUp"
      />

      <v-list density="compact">
        <v-list-item v-for="(tarefa) in store.state.tarefas" :key="tarefa.id">
          <template #prepend>
            <v-sheet class="d-flex align-baseline painel-acoes">
              <v-checkbox v-model="tarefa.done" color="success" density="comfortable"/>
              <v-switch v-model="tarefa.doing" color="warning"/>
            </v-sheet>
          </template>

          <template #title>
            <v-sheet class="label-tarefa">
              {{ tarefa.nome }}
            </v-sheet>
          </template>

          <template #append>
            <v-sheet class="botao-excluir">
              <v-btn density="compact" color="red" variant="elevated"
                     :icon="true" @click="excluir(tarefa.id)">
                <font-awesome-icon :icon="['fas', 'trash-can']"/>
              </v-btn>
            </v-sheet>
          </template>

          <template #subtitle>
            <v-sheet class="text-center">
              estado da tarefa
            </v-sheet>
          </template>
        </v-list-item>
      </v-list>

      <v-footer>{{store.getters.concluido}}/{{store.getters.total}}</v-footer>
    </v-container>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "@/store";

let nomeTarefa = '';

function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    store.dispatch('criar', { nome: nomeTarefa, doing: event.ctrlKey});
    nomeTarefa = '';
  }
}

function excluir(id: number) {
  const tarefa = store.state.tarefas.find((tar) => tar.id === id);
  if (tarefa) {
    const response = confirm(`Tem certeza que seja excluir a tarefa ${tarefa.nome} ?`);
    if (response) store.dispatch('excluir', tarefa.id);
  }
}
</script>

<style scoped>
.container {
  min-width: 550px;
}
.painel-acoes > * {
  margin: 0 1em;
}
.label-tarefa {
  padding: 0 3em;
}
.botao-excluir {
  padding-right: 1em;
}
</style>