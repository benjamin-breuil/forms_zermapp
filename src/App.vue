<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
import Forms from "@/components/Forms.vue";
import ListOfForms from "@/components/ListOfForms.vue";

const router = useRouter();

</script>

<template>
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

