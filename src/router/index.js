import { createRouter, createWebHistory } from 'vue-router'
import ListOfForms from "@/views/ListOfFormsView.vue";
import ListOfFormsView from "@/views/ListOfFormsView.vue";
import FormView from "@/views/FormView.vue";
import Login from "@/views/LoginView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListOfFormsView
    },
    {
      path: '/form/:id',
      name: 'form',
      component: FormView

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router

