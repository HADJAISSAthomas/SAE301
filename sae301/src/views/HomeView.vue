<script setup>
import Lunettex2 from '../components/icons/Lunettex2.vue';
import MapOsm from '../components/MapOsm.vue';
</script>

<template>
  <main>
    <div class="full-width-image-container">
    <img src="@/assets/Group-64.webp" alt="Image en largeur totale">
  </div>
  <div class="description">
    <div class="TitreHome">BIENVENUE CHEZ TaVue</div>
    <div class="DescriHome">TaVue, une marque de lunettes française qui incarne l'élégance raffinée, le minimalisme et la pureté, pour des regards qui capturent l'essence de la mode et de l'artisanat français.</div>
  </div>


  <div class="Valeur">
    <div class="TitreValeur">Nos Valeurs en 3Points</div>
    
    <div class="icon-container">
    <div class="icon">
      <img src="@/components/Icon1.svg">
      <div class="texteicone">Le MadeInFrance à l’honneur</div>
    </div>
    <div class="icon">
      <img src="@/components/Icon2.svg">
      <div class="texteicone">L’essence même de la mode</div>

    </div>
    <div class="icon">
      <img src="@/components/Group 36.svg">
      <div class="texteicone">L’élégence et la pureté</div>

    </div>
  </div>
  </div>

  <div class="ContainerSensi">
    <div class="Message">
      <div class="para1">🌞 Protégez contre les Rayons du Soleil : Les lunettes de soleil offrent une barrière essentielle contre les rayons UV nocifs. Profitez du plein air en toute confiance, sachant que vos yeux sont en sécurité.
      </div>
      <br>
      <div class="para1">📚 Améliorez Votre Vision : Les lunettes correctrices vous aident à voir le monde avec clarté. Lisez, conduisez, travaillez et profitez de la vie sans flou ni effort.
      </div>
      <br>
      <div class="para1">🌆 Conservez Votre Vision à Long Terme : Les lunettes aident à prévenir la fatigue oculaire, les tensions et les dommages à long terme. Investissez dans votre avenir visuel.
      </div>
      <br>
      <div class="para1">👓 Exprimez Votre Style : Avec un large éventail de designs et de montures, trouvez des lunettes qui reflètent votre personnalité, votre style de vie et votre unicité.
      </div>
      <br>
      <div class="para1">👁️ Prenez Soin de Vos Yeux, Ils Sont un Trésor : Vos yeux sont irremplaçables. Protégez-les, chérissez-les et offrez-leur le confort et la clarté qu'ils méritent.
      </div>
    </div>

  </div>

  <div class="lunetteimg">
      <Lunettex2/>
      <div class="texteicone">L'Élégance à la Française, Vos Yeux en Témoignent</div>
    </div>

    <div class="TitreValeur">Pour Trouver Nos locaux</div>

    <MapOsm/>

    

  </main>
</template>


<style>
.ContainerSensi{
  background-color: #00255B;
  padding-top: 50px;
  padding-bottom: 50px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 25px;
}
.Message{
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 250px;
  padding-right: 250px;
  text-align: justify;
  margin: 0 auto;
}
.full-width-image-container img {
    width: 100vw;
    max-height: 70vh; /* Ajustez cette valeur selon vos besoins /
    object-fit: cover; / Redimensionne l'image pour couvrir le conteneur tout en maintenant le rapport hauteur/largeur de l'image */
    display: block;
}
.description {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center; /* Pour centrer le contenu horizontalement */
  padding-left: 20px; /* Espace intérieur autour du texte */
  color: #00255B
}
.Valeur{
  margin-bottom: 50px;
  margin-top: 50px;
  padding-bottom: 10px;
}
.TitreHome{
  margin-bottom: 50px;
  font-size: 30px;
  font-weight:bold;
  font-family: 'PT Sans', sans-serif;
  
}
.TitreValeur{
  margin-bottom: 50px;
  font-size: 30px;
  font-weight:bold;
  font-family: 'PT Sans', sans-serif;
  text-align: center;
  color:#00255B
  
}
.DescriHome{
  font-size: 15px;
  font-weight: lighter;
  font-family: 'PT Sans', sans-serif;
  padding-left: 450px;
  padding-right: 450px;
  text-align: center;
  margin: 0 auto;
}

.icon-container {
  display: flex; /* Utilisation de Flexbox */
  justify-content: center; /* Pour centrer horizontalement les icônes */
  text-align: center;
}

.lunetteimg {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 20px;
  justify-content: center; /* Pour centrer horizontalement les icônes */
  text-align: center;
}

.icon {
  margin: auto; /* Espacement horizontal entre les icônes */
}
.texteicone{
  font-size: 17px;
  font-weight: lighter;
  font-family: 'PT Sans', sans-serif;
  text-align: center;
  margin: 0 auto;
  color:#00255B
}
</style>
