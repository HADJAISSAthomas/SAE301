<script setup lang="ts">
import { RouterLink } from 'vue-router';

  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

// Import pocketbase
import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}
const loginWithGithub = async () => {
    await pb.collection("users").authWithOAuth2({ provider: "github" });
        if (pb.authStore.isValid) {
            document.getElementsById("statuts").innerHTML = "You are now legged in Github";
            connected = true;
            currentUser=pb.authStore.model; 
        }

  
}

</script>

<template>
     <header>
    <RouterLink to="/" div class="logo">TAVUE</RouterLink>

    <div class="Bouton">
        <RouterLink to="/Personnaliser" button class="nav-btn">Personnaliser</RouterLink>
        <RouterLink to="/Panier" button class="nav-btn">Mon Panier</RouterLink>
        <RouterLink to="/Connexion" button class="nav-btn">Connexion</RouterLink>
    </div>
    
    <div class="ml-auto">              
              <span v-if="isConnected"> 
                <div class="user-info">
                    <img :src="avatar" class="img-fluid" style="max-width:60px;" />
                        <div class="custom-btn">Bonjour mon ami : {{ currentUser.username }}</div>
                        <button class="btn btn-disconnect" type="button" @click="deconnect">Deconnexion
    <i class="fa fa-sign-out"></i>
  </button>
</div>
              </span>

              <form v-else class="form-inline  input-group-sm ml-auto" >
                  <input class="form-control mr-2" placeholder="E-mail" v-model="user">
                  <input class="form-control mr-2" placeholder="Mdp" v-model="psw">

                  

                  <button class="btn btn-connect" type="button" @click.prevent="connect">Connexion<i class="fa fa-power-off"></i>
                </button>

                <div class="logo-container">
                    <div class="textgithub" @click="loginWithGithub">Github</div>
                  </div>

                </form>
              </div>


  </header>
  </template>
  
  <style scoped>
  header {
  background-color: #ffffff;
  border-bottom:2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: space-between; /* Pour aligner les sections à gauche et à droite */
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}

.logo-container {
    padding-top: 10px;
    font-size: 15px;
    font-weight: lighter;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    margin: 0 auto;
    color:#00255B
}
.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-btn {
    background-color: none;
  color: #C90000; /* Texte en rouge */
  padding: 10px 20px; /* Rembourrage pour le bouton */
  border-bottom: 2px solid #C90000; /* Pas de bordure */
  font-family: 'PT Sans', sans-serif;
  margin-left: 3px;
  margin-right: 10px;
}
/* Style pour le bouton de déconnexion */
.btn-disconnect {
    font-family: 'PT Sans', sans-serif;
    background-color: #00255B; /* Fond Bleu */
  margin-top: 10px;
  border: none; /* Pas de bordure */
  border-radius: 4px; /* Pour faire un cercle */
  width: 300px; /* Largeur du cercle */
  height: 30px; /* Hauteur du cercle */
  color: white; /* Texte en blanc */
  display: flex;
  align-items: center; /* Centrer le contenu verticalement */
  justify-content: center; /* Centrer le contenu horizontalement */
  cursor: pointer;
}

/* Style pour le bouton de connexion */
.btn-connect {
    font-family: 'PT Sans', sans-serif;
  background-color: #00255B; /* Fond Bleu */
  margin-top: 10px;
  border: none; /* Pas de bordure */
  border-radius: 4px; /* Pour faire un cercle */
  width: 300px; /* Largeur du cercle */
  height: 30px; /* Hauteur du cercle */
  color: white; /* Texte en blanc */
  display: flex;
  align-items: center; /* Centrer le contenu verticalement */
  justify-content: center; /* Centrer le contenu horizontalement */
  cursor: pointer;
}

.logo {
  margin-left: 113px;
  color: #00255B;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 100;
  line-height: 54px;
  text-transform: uppercase;
}

nav {
  display: flex;
  gap: 102px;
}

.Bouton {
    display: flex;
    gap: 5px;
    color: #00255B;
 
    }
.nav-btn {
    margin-right: 50px;
    background: none;
    border: none;
    color: #00255B;
    font-family: 'PT Sans', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.4px;
    cursor: pointer;
    display: flex;
    align-items: center; /* Pour centrer le contenu verticalement */
    justify-content: center; /* Pour centrer le contenu horizontalement */
}
.panier-btn {
  margin-right: 50px;
  background-color: #00255B;
  border: none;
  border-radius: 8px;
  width: 184px;
  height: 44px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Pour centrer le contenu verticalement */
  justify-content: center; /* Pour centrer le contenu horizontalement */
}

.signup-btn {
  margin-right: 50px;
  background-color: #00255B;
  border: none;
  border-radius: 8px;
  width: 184px;
  height: 44px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
}

  </style>
  