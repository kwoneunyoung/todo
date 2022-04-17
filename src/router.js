import { createWebHistory, createRouter } from "vue-router";
import Diary from './components/Diary.vue';
import Todo from './components/Todo.vue';

const routes = [
    {
        path: "/diary",
        component: Diary,
    },
    {
        path : "/todo",
        component : Todo
    }
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;