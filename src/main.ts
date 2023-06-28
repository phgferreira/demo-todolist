import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Dependências necessárias do Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';


// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
});
app.use(store).use(router).use(vuetify).mount('#app');

library.add(fas, far);
app.component('font-awesome-icon', FontAwesomeIcon);
