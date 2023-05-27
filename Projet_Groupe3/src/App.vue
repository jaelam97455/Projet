<script setup lang="ts">
import { RouterView } from 'vue-router'
import PocketBase from 'pocketbase'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <HeaderPage />

  <main class="pt-[64px] md:pt-[72px] lg:pt-[128px]">
    <RouterView />
  </main>

  <FooterPage />
</template>

<script lang="ts">

// l'adresse du pocket base dépend de l'environnement d'exécution
// si developpement (npm run run dev) alors l'adresse est http://127.0.0.1:8090
// sinon si production (npm run build) alors l'adresse est http://193.168.146.158:80

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  pocketbase_ip = 'http://193.168.146.158:80'
else // si developpement
  pocketbase_ip = 'http://127.0.0.1:8090'

//connexion entre l'applciation et le serveur pocketbase
const pb = new PocketBase(pocketbase_ip)
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb.collection("users").authWithPassword(document.getElementById("login").value, document.getElementById("passwd").value);
    },
    //this method allows the already registred user to log in the system.
    async register() {
      await pb.collection("users").create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: "John Di",
      });
    }
  },
  components: { HeaderPage, FooterPage }
}
</script>
