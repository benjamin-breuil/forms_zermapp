<template>
  <div>
    <button class="btn" @click="signIn()">Se Connecter avec Microsoft</button>
    <button  class="btn"  @click="signOut()">Se Déconnecter</button>
    <h1>{{username}}</h1>
    <h1>{{email}}</h1>

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

