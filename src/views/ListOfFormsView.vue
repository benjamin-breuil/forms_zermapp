<script setup>
import { ref, onMounted } from 'vue';
import {RouterLink, useRouter} from "vue-router";

const router = useRouter();
const URL = 'http://localhost:8000/api/get-events';

let events = ref([]);

async function logEvents(){
  const response = await fetch(URL);
  events.value = await response.json();
}

onMounted(() => {
  logEvents();
});



</script>

<template >
  <h1>Inscrivez-vous aux différents séminaires ! </h1>



  <div id="cards"
      v-for="event in events"
      :key="event.id"

      class="card w-96 bg-base-100 shadow-xl cursor-not-allowed">
    <div
        class="card-body">
      <h2 class="card-title">{{ event.title }}</h2>
      <p>{{ event.description }}</p>
      <div class="card-actions justify-end">
        <button @click="router.push(`/form/${event.id}`)" class="btn btn-primary" v-if="event.available_place > 1">Il reste {{ event.available_place }} places disponible</button>
        <button @click="router.push(`/form/${event.id}`)" class="btn btn-primary" v-else-if="event.available_place === 1">Il reste {{ event.available_place }} place disponible</button>
        <button class="btn btn-primary cursor-not-allowed" v-else>Il n'y a plus de place disponible</button>
      </div>
    </div>
  </div>



</template>

<style scoped>
#cards {

}

</style>
