<template>
  <div>
    <button  class="btn" v-if="username" @click="signOut()">Se Déconnecter</button>
    <button class="btn" v-else @click="signIn()">Se Connecter avec Microsoft</button>
    <h1>{{username}}</h1>
    <h1>{{email}}</h1>

  </div>


</template>
<script setup>
import {configDotenv} from "dotenv";
import {onMounted, ref} from "vue";


const msalConfig = {
  auth: {
    clientId: '864eea7c-7660-43bd-936d-5189878e4f35',
    authority: "https://login.microsoftonline.com/de084535-12a9-406c-bd84-d4bbcdb1a7b4",
    redirectUri: `http://localhost:5173/`,

  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
const username = ref('');
const email = ref('')

function signIn(){
  msalInstance.loginPopup().then(function(response) {
    displayUserInfo()
  }).catch(function(error) {
    console.log(error);
  });
}

function signOut(){
  msalInstance.logout();
  username.value = ''
  email.value = ''
  localStorage.removeItem('username')
  localStorage.removeItem('email')

}


function displayUserInfo(){
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0){
    const user = accounts[0];
    username.value = user.name
    email.value = user.username
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);

    console.log(username)
  }
}

onMounted(() => {
  username.value = localStorage.getItem('username')
  email.value = localStorage.getItem('email')

})

</script>

