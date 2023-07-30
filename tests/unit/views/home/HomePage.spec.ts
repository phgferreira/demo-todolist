import {mount} from "@vue/test-utils";
import HomePage from "@/views/home/HomePage.vue";

describe('HomePage.vue', () => {

    it('deve inserir uma tarefa na lista', () => {
        const wrapper = mount(HomePage);
        const input = wrapper.find('[data-test="input"]');
        input.setValue('tarefa de teste');
        input.trigger('keyup.enter');
        console.log('teste');
    });
});