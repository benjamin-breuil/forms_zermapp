<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
import Forms from "@/components/Forms.vue";
import ListOfForms from "@/components/ListOfForms.vue";


const router = useRouter();

</script>

<template>


  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="dropdown">
        <a @click="router.push(`/`)" class="navbar-center">
          <img class="btn btn-ghost normal-case text-xl" src="../src/images/logo-black.svg">
        </a>
      </div>
    </div>
    <div class="navbar-center">
      <button @click="router.push(`/`)"  class="btn">Formulaire</button>
      <button @click="router.push(`/login`)"  class="btn">Profil</button>
    </div>
  </div>



  <main>
    <RouterView />
  </main>

</template>

<style scoped>

</style>

