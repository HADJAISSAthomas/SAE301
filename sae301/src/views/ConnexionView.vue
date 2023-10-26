<script>
import PocketBase from 'pocketbase'
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "http://tavue.thomashadjaissa.fr:8090";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb
        .collection("users")
        .authWithPassword(
          document.getElementById("email").value,
          document.getElementById("passwd").value
        );

      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    //this method allows the already registred user to log in the system.
    async register() {
      currentUser = await pb.collection("users").create({
        email: document.getElementById("email").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: "email",
      });
      if (currentUser) {
        document.getElementById("status").innerHTML =
          "Nous vous avons envoyer un mail de vérifictaion ...";
        await pb
          .collection("users")
          .requestVerification(document.getElementById("email").value);
      }
    },
    async googlelogin() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    async loginGithub() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "Vous êtes maintenant connecté avec Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
    async createPoem() {
      const record = await pb.collection("poems").create({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        private: document.getElementById("notpublic").value,
        email: currentUser.email,
        illustration: document.getElementById("file").files[0],
      });
    },
},
};
</script>
<template>
    <br><br><br><br>
<div class="card">
<div style="align-items: center;">
    <div>
        <h1 class="text-4xl font-bold text-black">Inscrivez-vous,</h1>
    </div>
    <div class="container">
    <div class="wrapper" id="signOut">
      <div><SignIn msg="Enter votre email pour vous connecter" /></div>
      <div class="textemdp">Adresse mail : </div><br />
      <input
        type="email"
        required
        id="email"
        placeholder="username@domain.tld"
      /><br />
      <div class="textemdp">Mot de passe : </div><br />
      <input type="password" required id="passwd" /><br />
      <div class="flex align" style="gap: 50px;">
        <button v-on:click="register()">S'inscrire</button>
        <button v-on:click="login()">Se connecter</button>
      </div>
      <div>
        <IconGithub />
      </div>
      <div>
        <button v-on:click="loginGithub()" style="background-color: black;">Se connecter avec Github</button>
      </div>
    </div>
</div>
</div>
</div>
<br><br><br><br>
</template>

<style>
.align {
  display: flex;
  justify-content: center;
}
.textemdp {
  margin-top: 10px;
  margin-bottom: 10px;
  color:#00255B;
  font-family: 'PT Sans', sans-serif;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 900px;
  margin: auto;
  text-align: center;
  transition: box-shadow 0.3s ease;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #fff, #f0f0f0);
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  margin-top: 20px;
}

button {
  background-color: #00255B;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  font-family: 'PT Sans', sans-serif;
}

button:hover {
  background-color: #43458b;
}

h1 {
  font-size: 24px;
  color: #00255B;
  margin-bottom: 20px;
  font-family: 'PT Sans', sans-serif;
  font-weight: lighter;
}

label {
  display: block;
  margin-bottom: 6px;
  text-align: left;
  color: #00255B;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

#status {
  color: #ff6347;
  margin-top: 12px;
}

.wrapper {
  display: flex;
  flex-direction: column;

}

</style>
