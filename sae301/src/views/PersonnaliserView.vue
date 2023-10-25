<script setup>
import Lunette from '../components/icons/Lunette.vue';
import Lunette_perso from '../components/icons/Lunette_perso.vue';



let articleQuantite = 1; // Initialisez la quantité à 1 par défaut

// Fonction pour mettre à jour la quantité de l'article
const updateArticleQuantite = () => {
  articleQuantite = parseInt(selectedCadran) + parseInt(selectedVerre);
};


// Dans la section <script setup>
const cadranColors = [
  { name: "Rouge", value: "red" },
  { name: "Bleu", value: "blue" },
  { name: "Noir", value: "black" }
];

const verreColors = [
    { name: "Rouge", value: "red" },
    { name: "Bleu", value: "blue" },
    { name: "Noir", value: "black" }
];

// Dans la section <script setup>
const cadranMaterials = [
  { name: "Acier", value: "steel" },
  { name: "Or", value: "gold" },
  { name: "Plastique", value: "plastic" }
];

const verreMaterials = [
  { name: "Verre trempé", value: "tempered_glass" },
  { name: "Plexiglas", value: "plexiglas" },
  { name: "Cristal", value: "crystal" }
];

const selectedCadranMaterial = cadranMaterials[0].value; // Par défaut, sélectionnez le premier matériau du cadran
const selectedVerreMaterial = verreMaterials[0].value; // Par défaut, sélectionnez le premier matériau du verre




const selectedCadran = cadranColors[0].value; // Par défaut, sélectionnez la première option du cadran
const selectedVerre = verreColors[0].value; // Par défaut, sélectionnez la première option du verre

// Dans la section <script setup>
const cadranTypes = [
  { name: "Type Rond", value: "type1" },
  { name: "Type Carré", value: "type2" },
  { name: "Type Jsp", value: "type3" }
];

const verreTypes = [
  { name: "Type Rond", value: "typeA" },
  { name: "Type Carré", value: "typeB" },
  { name: "Type Jsp", value: "typeC" }
];

const selectedCadranType = cadranTypes[0].value; // Par défaut, sélectionnez le premier type de cadran
const selectedVerreType = verreTypes[0].value; // Par défaut, sélectionnez le premier type de verre







</script>
<template>
    <main>

        <div class="Banniere">
            <div class="MessageCommande">
                <div class="textecommande">Nombre de lunettes commandées : {{ articleQuantite }}</div>
                
                <div class="chiffre"> 3
                </div>
            </div>
        </div>

        <div class="product-container">

            <div class="product-image">
                <Lunette_perso/>
            </div>

            <div class="product-details">
                <div class="product-name">
                    <h2>TaVue - de La Fuente</h2>
                </div>

                <div class="product-price">
                    <p>Prix: 549€</p>
                </div>
            </div>
        </div>

        <div class="perso">

            <div class="ronds">
                <div class="Cadran">Couleur Cadran</div>
                <select v-model="selectedCadran" class="dropdown">
                    <option v-for="(color, index) in cadranColors" :key="index" :value="color.value">{{ color.name }}</option>
                </select>
  
                <div class="Cadran">Couleur Verre</div>
                <select v-model="selectedVerre" class="dropdown">
                    <option v-for="(color, index) in verreColors" :key="index" :value="color.value">{{ color.name }}</option>
                </select>
            </div>


            <div class="ronds">
                <div class="Cadran">Matériaux Cadran</div>
                <select v-model="selectedCadranMaterial" class="dropdown">
                    <option v-for="(material, index) in cadranMaterials" :key="index" :value="material.value">{{ material.name }}</option>
                 </select>
                
                <div class="Cadran">Matériaux Verre</div>
                <select v-model="selectedVerreMaterial" class="dropdown">
                    <option v-for="(material, index) in verreMaterials" :key="index" :value="material.value">{{ material.name }}</option>
                </select>
            </div>

            <div class="ronds">
                <div class="Cadran">Type Cadran</div>
                    <select v-model="selectedCadranType" class="dropdown">
                        <option v-for="(type, index) in cadranTypes" :key="index" :value="type.value">{{ type.name }}</option>
                    </select>
                <div class="Cadran">Type Verre</div>
                     <select v-model="selectedVerreType" class="dropdown">
                        <option v-for="(type, index) in verreTypes" :key="index" :value="type.value">{{ type.name }}</option>
                    </select>
            </div>

     



        </div>

        <div class="full-width-image-container">
            <img src="@/assets/Group-64.webp" alt="Image en largeur totale">
        </div>

        <div class="Caracteristique">
            <div class="Cata">
                <div class="para1">Monture : La monture est la structure qui soutient les verres et repose sur le nez et les oreilles. Elle peut être fabriquée en divers matériaux, comme le plastique, le métal ou l'acétate, et est disponible dans différentes formes, couleurs et styles.
                </div>
                <br>
                <div class="para1">Verres : Les verres sont la partie transparente des lunettes qui corrige la vision (dans le cas des lunettes de vue), protège contre les rayons UV (pour les lunettes de soleil), ou sert à d'autres fonctions spécifiques. Les verres sont disponibles dans différentes puissances, traitements et revêtements.
                </div>
                <br>
                <div class="para1">Puissance de Correction : Pour les lunettes de vue, la puissance de correction est mesurée en dioptries. Elle indique la force de correction nécessaire pour améliorer la vision, qu'il s'agisse de corriger la myopie, l'hypermétropie, la presbytie, ou l'astigmatisme.
                </div>
                <br>
                <div class="para1">Protection UV : Les lunettes de soleil offrent une protection contre les rayons ultraviolets (UV). Les verres avec une protection UV absorbent ces rayons nocifs, protégeant ainsi les yeux des dommages causés par le soleil.
                </div>
                <br>
                <div class="para1">Revêtements : Certains verres sont dotés de revêtements spéciaux, tels que des revêtements antireflets pour réduire les reflets, des revêtements anti-rayures pour renforcer la durabilité, et des revêtements hydrophobes pour repousser l'eau.
                <br>
                <div class="para1">Style : Le style de la monture varie en fonction des tendances de la mode et des préférences individuelles. Les lunettes peuvent être classiques, contemporaines, rétro, sportives, ou adaptées à des besoins spécifiques.
                </div>
                <br>
                <div class="para1">Poids et Confort : Le poids de la monture et le confort global sont importants pour une utilisation quotidienne. Des lunettes légères et bien ajustées minimisent les sensations d'inconfort.
                </div>
                <br>
                <div class="para1">Durabilité : La durabilité de la monture et des verres est essentielle pour assurer la longévité des lunettes. Les matériaux de haute qualité et les finitions robustes contribuent à la durabilité.
                </div>
                <br>
                <div class="para1">Systèmes de Fixation : Les lunettes peuvent avoir différentes méthodes de fixation, y compris des charnières flexibles, des plaquettes de nez ajustables, et des branches à ressort pour un ajustement confortable.
                </div>
                <br>
                <div class="para1">Normes de Sécurité : Les lunettes de protection, telles que les lunettes de sécurité ou de sport, peuvent être soumises à des normes de sécurité spécifiques pour protéger les yeux contre les risques liés à l'activité.
                </div>
            </div>
        </div>


        <div class="lunetteimg">
            <img src="@/assets/Paris.webp" alt="Img Paris">
    </div>

        
        

  </div>
        
    </main>
</template>

<style>

.image-container {
  display: flex; /* Utilisation de Flexbox */
  justify-content: center; /* Centre horizontalement l'image */
  align-items: center; /* Centre verticalement l'image */
  width: 300px; /* Largeur souhaitée de la div */
  height: 200px; /* Hauteur souhaitée de la div */
  border: 1px solid #ccc; /* Bordure autour de la div */
  overflow: hidden; /* Cache le dépassement de l'image */
}

img {
  max-width: 100%; /* Ajuste la largeur de l'image pour rester dans la div */
  max-height: 100%; /* Ajuste la hauteur de l'image pour rester dans la div */
  display: block; /* Supprime l'espace réservé sous l'image */
  margin: 0 auto; /* Centre l'image horizontalement */
}
.Caracteristique{
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #00255B;
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
}
.Cata{
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 250px;
  padding-right: 250px;
  text-align: justify;
  margin: 0 auto;
}
    .product-container {
  display: flex;
  gap: 300px;
  align-items: center;
  margin: 20px;
  color: #00255B;
  font-size: 25px;
  font-family: 'PT Sans', sans-serif;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
}

.product-name h2 {
  margin: 0;
}

.product-price {
  display: flex;
  align-items: center;
}




.perso{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espace entre les ronds */
  margin-top: 20px;
  background-color: #00255B;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.dropdown {
  margin: 5px; /* Espace autour de la liste déroulante */
  font-size: 20px;
  border:2px solid #C90000;
  color: #C90000;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  border-radius: 8px;

}

.ronds {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espace entre les ronds */
  margin-top: 20px;
}
.rond {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  margin-left: 30px;
}
.Cadran {
  margin-left: 30px;
  font-size: 15px;
  font-family: 'PT Sans', sans-serif;
  color: white;
  text-align: center
  
}
.Banniere{
  background-color: #000000;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  margin-top: 5px;
}
.MessageCommande{
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex; /* Utilisation de Flexbox */
  justify-content: center; /* Pour centrer horizontalement les icônes */
}
.textecommande{
    padding-right: 30px;
}
</style>