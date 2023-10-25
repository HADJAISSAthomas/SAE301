<script>
import Lunette_perso from '../components/icons/Lunette_perso.vue';

export default {
  data() {
    return {
      panier: [
        {
          photo: 'url_de_l_image1',
          nom: 'TaVue - de la Fuente',
          prix: 549.00,
          quantite: 1,
        },
        // Ajoutez d'autres articles au panier si nécessaire
      ],
    };
  },
  methods: {
    augmenterQuantite(article) {
      article.quantite++;
    },
    diminuerQuantite(article) {
      if (article.quantite > 1) {
        article.quantite--;
      }
    },
    retirerArticle(index) {
      this.panier.splice(index, 1);
    },
    calculerTotal() {
      return this.panier.reduce((total, article) => total + article.prix * article.quantite, 0);
    },
    passerALaCaisse() {
      // Rediriger l'utilisateur vers la page de paiement
      // Vous pouvez ajouter ici la logique de paiement
    },
  },
};
</script>
<template>
   <div>
    <h1>Mon Panier</h1>
    <div v-if="panier.length === 0">
      <p>Le panier est vide.</p>
    </div>
    <div v-else>
      <div v-for="(article, index) in panier" :key="index" class="cart-item">
        <img :src="article.photo" alt="Image de l'article">
        <div class="infos">
            <div class="NomArticle">{{ article.nom }}</div>
            <p>Prix : {{ article.prix }} €</p>
            <p>Quantité : {{ article.quantite }}</p>
            <button @click="diminuerQuantite(article)">-</button>
            <button @click="augmenterQuantite(article)">+</button>
            <button @click="retirerArticle(index)">Supprimer</button>
        </div>
      </div>
      <p>Total : {{ calculerTotal() }} €</p>

        <div class="Commanderbtn">
            <button @click="passerALaCaisse">Commander</button>
        </div>
    </div>
  </div>

</template>

<style scoped>
.Commanderbtn{
    display: flex;
    margin-right: 30px;
}
.infos{
    gap : 30px;
}
.NomArticle {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'PT Sans', sans-serif;
}
.cart-item {
  border: 4px solid #00255B;
  margin: 10px 0;
  padding: 10px;
  display: flex;

}

.cart-item img {
  max-width: 100px;
  margin: 10px 0;
}

button {
  margin: 5px;
}
</style>

