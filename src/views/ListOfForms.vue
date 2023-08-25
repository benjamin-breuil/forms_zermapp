<script setup>
import { ref, onMounted } from 'vue';


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
  <div class="cards">
    <div v-for="event in events" :key="event.id" class="card">
      <h1>{{event.title}}</h1>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
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
