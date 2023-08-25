<script setup>
import { ref, onMounted } from 'vue';

const URL = 'http://localhost:8000/api/events-forms';
const events = ref([]);
let id = 0;

</script>

<template>
  <h1>{{ eventTitle }}</h1>
</template>

<style scoped>

</style>
