<template>
    <footer>
      <div class="footer-section">
        <div class="Titre1">Mentions légales</div>
        <div class="Texte1">Projet réalisé dans le cadre d’un projet pédagogique au sein du département MMI de Montbéliard</div>
      </div>
      <div class="footer-section">
        <div class="Titre2">Me contacter</div>
        <div class="Texte2">Thomas HADJ-AISSA - thomas.hadj_aissa@edu.univ-fcomte.fr</div>
      </div>
    </footer>
  </template>
  
  <style>
  footer {
    background-color: #00255B; /* Couleur de fond du footer */
    color: #fff; /* Couleur du texte */
    padding: 20px; /* Espace intérieur du footer */
    display: flex;
    justify-content: space-between; /* Pour aligner les sections à gauche et à droite */
    align-items: center; /* Pour centrer le texte verticalement */
    
  }
  
  .footer-section {
    text-align: left; /* Alignement à gauche pour les titres */
  }
  .Titre1{
    font-size: 20px;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
  }
  .Texte1{
    font-size: 15px;
    font-family: 'PT Sans', sans-serif;
  }
  .Titre2{
    font-size: 20px;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
  }
  .Texte2{
    font-size: 15px;
    font-family: 'PT Sans', sans-serif;
  }
  
  .footer-section h2 {
    margin: 0; /* Supprime la marge par défaut des titres */
  }
  
  .footer-section p {
    text-align: center; /* Alignement au centre pour les textes */
  }
  
  </style>
  