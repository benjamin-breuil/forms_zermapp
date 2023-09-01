<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
import Forms from "@/components/Forms.vue";
import ListOfForms from "@/components/ListOfForms.vue";

// Dans n'importe quel composant


const router = useRouter();
// Vérifiez si l'utilisateur est connecté et dispose d'un jeton d'accès valide


</script>

<template>
  <h1></h1>
  <div class="navbar bg-base-300">
    <div class="navbar-start">

    </div>
    <div @click="router.push(`/`)" class="navbar-center">
      <a ><img    class="btn btn-ghost normal-case text-xl" src="../src/images/logo-black.svg"></a>
    </div>
    <div class="navbar-end">

    </div>
  </div>
  <main>
    <RouterView />
  </main>

</template>

<style scoped>

</style>

