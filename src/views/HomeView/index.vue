<template>
  <h1>Home Page</h1>
    <v-container class="pa-16">
        <v-text-field
            v-model="nomeTarefa"
            :autofocus="true"
            placeholder="Digite a tarefa e tecle Enter"
            @keyup.enter="adicionarTarefa"
            append-inner-icon="mdi-magnify"
        />
      <v-list>
        <v-list-item v-for="tarefa in tarefas" :key="tarefa.nome">
          <v-row>
            <v-col>
              <v-switch v-model="tarefa.doing" :label="tarefa.nome" class="ml-3" hide-details>
                <template #label>
                  {{ tarefa.nome }} <v-spacer/> <span v-if="tarefa.doing" class="font-weight-thin float-left text-green">[em andamento]</span>
                </template>
              </v-switch>
            </v-col>
            <v-col>
              <v-btn color="red" :icon="true">
                <font-awesome-icon icon="fa-trash-can" />
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item>

      </v-list>
    </v-container>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import Tarefa from "@/model/Tarefa";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: 'HomeView',
  components: {FontAwesomeIcon},
    setup() {
        let nomeTarefa = ref('');
        let tarefas: Tarefa[] = reactive([]);

        function adicionarTarefa() {
          const tarefa: Tarefa = { nome: nomeTarefa.value, doing: false, done: false };
            tarefas.push(tarefa);
            nomeTarefa.value = '';
        }

        return { nomeTarefa, tarefas, adicionarTarefa}
    }
}
</script>
