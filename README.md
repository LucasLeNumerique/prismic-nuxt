# Projet Headless CMS
## Site internet de l'association Léo Five DeVinci

### Outils utilisés
Le Headless CMS que nous avons choisi est **Prismic**. Nous y récupérons toutes les données et les mettons en forme via ce repository **NuxtJS**.
Le design du site a été majoritairement réalisé avec le [material kit design](https://material.io).

### Structure du site web
#### Page d'accueil
#### Blog
#### Focus sur un article
#### Page de contact

### Difficultés rencontrées sur NuxtJS
#### Structure du projet NuxtJS
L'architecture des fichiers sur NuxtJS n'a pas été évidente à prendre en main.
#### Utilisation des variables entre les pages
Nous avons eu des blocages sur le transfert de variable d'un fichier Vue à un autre.
#### Intégration de Material Kit Design
L'objectif était d'avoir recours à l'UI kit des consignes. Son intégration est presque complète (le footer en est l'exception).
#### Documentation NuxtJS/Prismic
Le code présenté sur la page de documentation n'est pas infaillible. Ce n'est pas évident lorsque nous souhaitions expérimenter dans un premier temps.

### Liens utiles

Prismic : https://nuxt-iim.prismic.io <br>
Id : lucas.schrever@gmail.com <br>
Mdp : headlesscms <br>

### Instructions dans l'IDE
1. Cloner ce repository <br>
2. Utiliser ces commandes à la racine du projet dans votre IDE <br>
`npm i @nuxtjs/prismic vue-slicezone nuxt-sm` Afin de se connecter à Prismic <br>
`npx @slicemachine/init` Afin de détecter le repository Prismic utilisé pour ce projet <br>
`npm run dev`Pour lancer le projet en local.




