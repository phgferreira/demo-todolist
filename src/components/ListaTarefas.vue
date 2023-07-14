<template>
  <v-list density="compact">
  <v-list-item v-for="(tarefa) in store.state.tarefas" :key="tarefa.id" class="d-flex align-baseline justify-space-between">
    <template #prepend>
      <v-sheet class="d-flex align-baseline justify-space-between">
        <v-checkbox v-model="tarefa.done" color="success" density="comfortable"/>
        <v-switch v-model="tarefa.doing" color="warning"/>
      </v-sheet>
    </template>

    <template #title>
        {{ tarefa.nome }}
    </template>

    <template #append>
      <v-sheet class="botao-excluir">
        <v-btn density="compact" color="red" variant="elevated"
               :icon="true" @click="excluir(tarefa.id)">
          <font-awesome-icon :icon="['fas', 'trash-can']"/>
        </v-btn>
      </v-sheet>
    </template>
  </v-list-item>
  </v-list>
  <v-footer>{{store.getters.concluido}}/{{store.getters.total}}</v-footer>
</template>

<script setup lang="ts">
import store from "@/store";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

function excluir(id: number) {
  const tarefa = store.state.tarefas.find((tar) => tar.id === id);
  if (tarefa) {
    const response = confirm(`Tem certeza que seja excluir a tarefa ${tarefa.nome} ?`);
    if (response) store.dispatch('excluir', tarefa.id);
  }
}
</script>

<style scoped>
.botao-excluir {
  padding-right: 1em;
}
</style>
