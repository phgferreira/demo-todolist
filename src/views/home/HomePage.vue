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
        <v-list-item v-for="(tarefa, index) in tarefas" :key="tarefa.id">
          <template #prepend>
            <v-row>
              <v-col>
                <v-checkbox v-model="tarefa.done" color="success" density="comfortable"/>
              </v-col>
              <v-col><v-switch v-model="tarefa.doing" color="warning"/></v-col>
            </v-row>
          </template>
          <template #title>
            {{ tarefa.nome }}
          </template>
          <template #append>
            <v-btn density="compact" color="red" :icon="true" variant="elevated" @click="excluir(index)">
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
import {reactive, ref} from "vue";
import Tarefa from "@/model/Tarefa";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const nomeTarefa = ref('');
const tarefas: Tarefa[] = reactive([]);

function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    const tarefa = gerarTarefa();
    if (event.ctrlKey) {
      tarefa.doing = true;
    }
  }
}

function gerarTarefa() {
  const nextId = tarefas.length === 0 ? 1 : Math.max(...tarefas.map((tarefa) => tarefa.id)) + 1;

  const tarefa: Tarefa = new Tarefa(nomeTarefa.value);
  tarefa.id = nextId;
  tarefas.push(tarefa);
  nomeTarefa.value = '';
  return tarefa;
}

function excluir(index: number) {
  const response = confirm(`Tem certeza que seja excluir a tarefa ${tarefas[index].nome} ?`);
  if (response) tarefas.splice(index, 1);
}

</script>
