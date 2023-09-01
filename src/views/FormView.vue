<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import {useRoute} from "vue-router";

const route = useRoute()

const {id} = route.params
const event = ref(null)

const URL = 'https://zermapp.jobtrek.ch/api/get-events';

let titre = ref('');
let orateur = ref('');
let description = ref('');
let site = ref('');
let salle = ref('');
let date = ref('');
let heure_debut = ref('');
let heure_fin = ref('');
let places_disponibles = ref('');
async function logEvents(){
  const response = await fetch(URL);
  const events = await response.json();



  event.value = events.find(c => c.id === parseInt(id))
  titre.value = event.value.title
  orateur.value = event.value.speaker;
  description.value = event.value.description;
  site.value = event.value.city_name;
  salle.value = event.value.room_name;
  heure_debut.value = event.value.time_of_event_beginning
  heure_fin.value = event.value.time_of_event_end
  places_disponibles.value = event.value.available_place
  date.value = event.value.date_of_event
  console.log(event.value.id)
}

onMounted(() => {
  logEvents(); //
});




</script>

<template>
  <div id="background">
    <div id="details">
      <h1>{{ titre }}</h1>
      <p>Orateur/Oratrice : {{ orateur }} ️</p>
      <p>{{ description }}</p>
      <p>Lieu : {{ site }}, {{ salle }} 📍 </p>
      <p>Le séminaire est prévu pour le {{ date }} de {{ heure_debut }} à {{ heure_fin }}</p>
      <p> Nombre de places disponibles : {{ places_disponibles }}  </p>
      <h2 class="center"> ⬇️ Cliquez sur le bouton pour vous inscrire ⬇️ </h2>
    </div>
    <div id="details">
      <h1>Sélectionner votre coach</h1>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Caroline Buff</label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Myriam Rendina </label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Thomas Vadillo</label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Sophie Heim</label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Lionel Arni</label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Lise Puigserver </label>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">Florent Dreq</label>
    </div>
    <div id="forms">
      <button class="buttonif"  v-if="places_disponibles !== 0">S'inscrire au séminaire</button>
      <button style="cursor: not-allowed" v-else>Il n'y a plus de place disponible</button>
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

* {
  font-family: 'Oswald', sans-serif;
}

#details {
  background-color: white;
  text-align: justify;
  margin: 20px auto;
  max-width: 1000px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 45px;
}

p {
  color: #777;
  font-size: 20px;
  text-align: justify;
}


label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
}

button {
  font-size: 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  width: 100%;
  height: 100px;
  cursor: pointer;
  transition: 0.09s;
}

button:hover {
  background-color: #005abb;
}

.buttonif:active {
  background-color: #007bff;
}

.center {
  text-align: center;
}

#forms {
  background-color: #d5d5d5;
  text-align: center;
  margin: 50px auto;
  max-width: 1000px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 30px;
}

@media only screen and (max-width: 500px) {
  * {
    overflow: hidden;
  }

  h1 {
    color: #333;
  }

  #details {
    margin-top: 0px;
  }
  #forms {
    margin-top: -40px;
    height: 100%;
  }

  button {
    height: 3rem;
  }

}

@media only screen and (max-width: 402px) {
  * {
    overflow: hidden;
  }

  #details {
    margin-top: 0px;
  }
  #forms {
    margin-top: -40px;
    height: 100%;
  }

  button {
    height: 3rem;
  }

  h1 {
    color: #333;
    font-size: 35px;
  }

}


</style>