import {mount} from '@vue/test-utils';
import {describe, expect, it} from "vitest";
import {createVuetify} from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "../../src/App.vue";
import sinon from 'sinon';


describe('HomePage.vue', () => {
  const vuetify = createVuetify({components, directives});

  it('deve renderizar componentes Vuetify', () => {
    const wrapper = mount(App, {
      global: { plugins: [vuetify] },
      slots: { default: '<home-page />'}
    });
    const input = wrapper.findComponent({name: 'v-text-field'});
    expect(input).to.exist;
    const listaTarefas = wrapper.findComponent({name: 'lista-tarefas'});
    expect(listaTarefas).to.exist;
  });

  it('deve criar tarefa e realizar funções', async () => {
    const wrapper = mount(App, {
      global: { plugins: [vuetify] },
      slots: { default: '<home-page />'}
    });
    const input = wrapper.findComponent({name: 'v-text-field'});

    await input.setValue('Tarefa de Teste');
    expect(input.props('modelValue')).equal('Tarefa de Teste');

    await input.find('input').trigger('keyup.Enter');
    expect(input.props('modelValue')).equal('');
    expect(wrapper.findComponent({name: 'v-list-item'}).text()).equal('Tarefa de Teste');

    const concluido = wrapper.findComponent({name: 'v-checkbox'});
    await concluido.vm.$emit('update:modelValue', true);
    expect(concluido.props('modelValue')).true;

    const iniciado = wrapper.findComponent({name: 'v-switch'});
    await iniciado.vm.$emit('update:modelValue', true);
    expect(iniciado.props('modelValue')).true;

    window.confirm = (message?: string) => true;
    const stubWindow = sinon.stub(window, 'confirm')
      .withArgs('Tem certeza que seja excluir a tarefa Tarefa de Teste ?');
    const excluir = wrapper.findComponent({name: 'v-btn'});
    await excluir.trigger('click');
    expect(stubWindow.calledOnce);
    expect(wrapper.findAllComponents({name: 'v-list-item'}).length).equal(0);
  });
});
