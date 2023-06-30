<template>
  <v-app>
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
          <template #subtitle>descrição</template>
        </v-list-item>
      </v-list>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "@/store";
import Tarefa from "@/model/Tarefa";

const nomeTarefa = ref('');
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

async function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    loading.value = true;

    // const tarefa = await store.dispatch('criar', nomeTarefa.value);
    const tarefa: Tarefa = new Tarefa(nomeTarefa.value);
    tarefa.id = store.state.proximoId;
    store.commit('adicionar', tarefa);
    store.state.proximoId++;

    if (event.ctrlKey) {
      tarefa.doing = true;
    }

    nomeTarefa.value = '';
    loading.value = false;
  }
}

function excluir(id: number) {
  const tarefa = store.getters.tarefa(id);
  const response = confirm(`Tem certeza que seja excluir a tarefa ${tarefa.nome} ?`);
  if (response) store.dispatch('excluir', tarefa);
}

</script>
