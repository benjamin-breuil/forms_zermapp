<script setup>
import { ref, onMounted } from 'vue';

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
  const event = events[0];

  titre.value = event.title;
  orateur.value = event.speaker;
  description.value = event.description;
  site.value = event.city_name;
  salle.value = event.room_name;
  date.value = event.date_of_event;
  heure_debut.value = event.time_of_event_beginning;
  heure_fin.value = event.time_of_event_end;
  places_disponibles.value = event.available_place;
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
      <h2>Nombre de places disponibles : {{ places_disponibles }}  </h2>
      <h2 class="center"> ⬇️ Cliquez sur le bouton pour vous inscrire ⬇️ </h2>
    </div>
    <div id="forms">
        <button>S'inscrire au séminaire</button>
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
  margin: 50px auto;
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

button:active {
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