<script setup>
import PocketBase from 'pocketbase'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="" width="125" height="125" />

    <div>
      <label width="50px">Login : </label><input type="email" id="login">
      <p></p>
      <label width="50px">Password : </label><input type="password" id="passwd">
      <p></p>
      <hr>
      <button v-on:click="register()">Register</button>
      <button v-on:click="login()">Login</button>
      <p></p>
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<script>
// l'adresse du pocket base dépend de l'environnement d'exécution
// si developpement (npm run run dev) alors l'adresse est http://127.0.0.1:8090
// sinon si production (npm run build) alors l'adresse est http://193.168.146.158:80

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  pocketbase_ip = 'http://193.168.146.158:80'
else // si developpement
  pocketbase_ip = 'http://127.0.0.1:8090'

alert(pocketbase_ip)
//connexion entre l'applciation et le serveur pocketbase
const pb = new PocketBase('http://127.0.0.1:8090')
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb.collection('users').authWithPassword(document.getElementById("login").value,
        document.getElementById("passwd").value);
    },
    //this method allows the already registred user to log in the system.
    async register() {
      await pb.collection('users').create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: 'John Di',
      });
    }

  }
}
</script>
<style scoped>
label {
  width: 100px;
  display: inline-block;
}

button {
  width: 150px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
