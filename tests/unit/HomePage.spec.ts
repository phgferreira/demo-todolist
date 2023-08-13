import {mount} from '@vue/test-utils';
import {describe, expect, it} from "vitest";
import {createVuetify} from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "../../src/App.vue";

describe('HomePage.vue', () => {
  const vuetify = createVuetify({components, directives});

  it('deve renderizar componentes Vuetify', () => {
    const wrapper = mount(App, {
      global: { plugins: [vuetify] },
      slots: { default: '<home-page />'}
    });
    const input = wrapper.findComponent({name: 'v-text-field'});
    expect(input).to.exist;
  });
});
