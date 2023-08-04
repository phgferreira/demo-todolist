import { mount } from '@vue/test-utils';
import HomePage from '@/views/home/HomePage.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

describe('HomePage.vue', () => {
  it('deve inserir uma tarefa na lista', () => {
    const wrapper = mount(HomePage, vuetify);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('tarefa de teste');
    input.trigger('keyup.enter');
  });
});
