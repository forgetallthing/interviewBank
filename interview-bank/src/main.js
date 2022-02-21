import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import TEditor from './components/TEditor.vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('TEditor',TEditor)
app.mount('#app')
