import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PanierView from '../views/PanierView.vue' // Importez votre vue PanierView
import ConnexionView from '../views/ConnexionView.vue' // Importez votre vue ConnexionView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/panier', // Ajoutez un nouveau chemin pour le panier
      name: 'panier',
      component: PanierView // Utilisez la vue PanierView
    },
    {
      path: '/connexion', // Ajoutez un nouveau chemin pour la page de connexion
      name: 'connexion',
      component: () => import('../views/ConnexionView.vue') // Utilisez la vue ConnexionView (veillez à l'importer correctement)
    },
    {
      path: '/personnaliser', // Ajoutez un nouveau chemin pour la page de connexion
      name: 'personnaliser',
      component: () => import('../views/PersonnaliserView.vue') // Utilisez la vue PersonnaliserView (veillez à l'importer correctement)
    }
  ]
})

export default router
