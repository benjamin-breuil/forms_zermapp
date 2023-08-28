<script setup>
import { ref, onMounted } from 'vue';
import {RouterLink, useRouter} from "vue-router";

const router = useRouter();
const URL = 'https://zermapp.jobtrek.ch/api/get-events';

let events = ref([]);

async function logEvents(){
  const response = await fetch(URL);
  events.value = await response.json();
}

onMounted(() => {
  logEvents();
});



</script>

<template>
  <button class="btn">Button</button>
  <h1>Inscrivez-vous aux différents séminaires ! </h1>
  <div class="cards">
    <div
        v-for="event in events"
        :key="event.id"
        class="card"
        @click="router.push(`/form/${event.id}`)"
    >
      <h1>{{event.title}}</h1>
    </div>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  font-size: 45px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  cursor:pointer;
  background-color: white;
  text-align: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
}


</style>
