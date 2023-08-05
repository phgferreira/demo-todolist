/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Fontawesome
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)

library.add(faTrashCan)
app.component('font-awesome-icon', FontAwesomeIcon)

registerPlugins(app)

app.mount('#app')
