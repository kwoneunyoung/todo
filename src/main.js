import { createApp } from 'vue'
import App from './App.vue'
import Diary from './router'
import Todo from './router'

createApp(App).use(Diary, Todo).mount('#app')
