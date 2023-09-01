<template>
  <div>
    <button class="btn" @click="signIn()">Se Connecter avec Microsoft</button>
    <button  class="btn"  @click="signOut()">Se Déconnecter</button>
    <h1>{{username}}</h1>


  </div>


</template>
<script setup>
import {configDotenv} from "dotenv";
import {onMounted, ref} from "vue";


const msalConfig = {
  auth: {
    clientId: 'VUE_AZURE_CLIENT_ID',
    authority: "https://login.microsoftonline.com/VUE_AZURE_TENANT_ID",
    redirectUri: `http://localhost:5173/`,
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
const username = ref('');


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
  localStorage.removeItem('username')
}


function displayUserInfo(){
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0){
    const user = accounts[0];
    username.value = user.name
    localStorage.setItem('username', username.value);
    console.log(username)
  }
}

onMounted(() => {
  username.value = localStorage.getItem('username')
})

</script>

