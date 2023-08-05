<template>
  <h1>Home Page</h1>
  <v-container class="pa-16 container">
    <v-text-field
        v-model="nomeTarefa"
        :autofocus="true"
        placeholder="Digite a tarefa"
        @keyup="handleKeyUp"
        data-test="input"
    />
    <lista-tarefas />
  </v-container>
</template>

<script lang="ts" setup>
import store from '@/store';
import { ref } from 'vue';
import ListaTarefas from '@/components/ListaTarefas.vue';

const nomeTarefa = ref('');

function handleKeyUp (event: KeyboardEvent) {
  if (event.key === 'Enter') {
    store.dispatch('criar', { nome: nomeTarefa.value, doing: event.ctrlKey });
    nomeTarefa.value = '';
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
</style>
