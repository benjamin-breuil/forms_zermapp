import { createRouter, createWebHistory } from 'vue-router'
import ListOfForms from "@/views/ListOfFormsView.vue";
import ListOfFormsView from "@/views/ListOfFormsView.vue";
import FormView from "@/views/FormView.vue";

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

    }
  ]
})

export default router
