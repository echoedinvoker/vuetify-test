/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { VueQueryPlugin } from 'vue-query'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(VueQueryPlugin)

registerPlugins(app)

app.mount('#app')
