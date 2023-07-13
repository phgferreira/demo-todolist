<template>
    <h1>Home Page</h1>
    <v-container class="pa-16">
      <v-text-field
          v-model="nomeTarefa"
          :autofocus="true"
          placeholder="Digite a tarefa"
          @keyup="handleKeyUp"
      />

      <v-list density="compact">
        <v-list-item v-for="(tarefa) in store.state.tarefas" :key="tarefa.id">
          <template #prepend>
            <v-row>
              <v-col>
                <v-checkbox v-model="tarefa.done" color="success" density="comfortable"/>
              </v-col>
              <v-col>
                <v-switch v-model="tarefa.doing" color="warning"/>
              </v-col>
            </v-row>
          </template>

          <template #title>
              {{ tarefa.nome }}
          </template>

          <template #append>
            <v-btn density="compact" color="red" :icon="true" variant="elevated" @click="excluir(tarefa.id)">
              <font-awesome-icon :icon="['fas', 'trash-can']"/>
            </v-btn>
          </template>

          <template #subtitle>estado da tarefa</template>
        </v-list-item>
      </v-list>

      <v-footer>{{store.getters.concluido}}/{{store.getters.total}}</v-footer>
    </v-container>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "@/store";

let nomeTarefa = '';

async function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    const tarefa = await store.dispatch('criar', nomeTarefa);
    if (event.ctrlKey) {
      tarefa.doing = true;
    }

    nomeTarefa = '';
  }
}

async function excluir(id: number) {
  const tarefa = store.state.tarefas.find((tar) => tar.id === id);
  if (tarefa) {
    const response = confirm(`Tem certeza que seja excluir a tarefa ${tarefa.nome} ?`);
    if (response) await store.dispatch('excluir', tarefa.id);
  }
}

</script>
