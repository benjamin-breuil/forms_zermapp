<template>
  <div>
    <button class="btn" @click="signIn()">Se Connecter avec Microsoft</button>
    <button  class="btn"  @click="signOut()">Se Déconnecter</button>
    <h1>{{username}}</h1>

  </div>


</template>
<script setup>
import { ref } from "vue";

const msalConfig = {
  auth: {
    clientId: 'AZURE_CLIENT_ID',
    authority: "https://login.microsoftonline.com/AZURE_TENANT_ID",
    redirectUri: `AZURE_REDIRECT_URI`,
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
}


function displayUserInfo(){
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0){
    const user = accounts[0];
    username.value = user.name
    console.log(username)
  }
}

</script>

