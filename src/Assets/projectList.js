import gamePict from './images/game.PNG'
import movie from './images/movie.png'
import juleLily from './images/dashboard_jule_et_lily.png'
import justePrice from './images/justeprix.PNG'
import catsCasino from './images/casinocats.PNG'
import scrollexp from './images/scrollexp.PNG'
import restaurant from './images/restaurant.PNG'


import movie1 from './images/movie/01.PNG'
import movie2 from './images/movie/pictureones.png'
import movie3 from './images/movie/harryp.PNG'
import movie4 from './images/movie/harryp2.PNG'
import movie5 from './images/movie/harryp.PNG'
import movie6 from './images/movie/titanic.PNG'

import lily from './images/jelily/00.png'
import lily1 from './images/jelily/01.png'
import lily2 from './images/jelily/02.png'
import lily3 from './images/jelily/03.png'
import lily4 from './images/jelily/04.png'
import lily5 from './images/jelily/05.png'

import resto from './images/resto/00.png'
import resto1 from './images/resto/01.png'
import resto2 from './images/resto/02.png'
import resto3 from './images/resto/03.png'
import resto4 from './images/resto/04.png'
import resto5 from './images/resto/05.PNG'

import skills1 from './images/meetup/plancheSKILLS.jpg'
import skills2 from './images/meetup/map.PNG'
import skills3 from './images/meetup/mapfiltre.PNG'
import skills4 from './images/meetup/mapfiltre2.PNG'
import skills5 from './images/meetup/picturesignup.PNG'
import skills6 from './images/meetup/param.PNG'

import beer1 from './images/beer/01.PNG'
import beer2 from './images/beer/02.PNG'
import beer3 from './images/beer/03.PNG'
import beer4 from './images/beer/04.PNG'
import beer5 from './images/beer/05.PNG'
import beer6 from './images/beer/06.PNG'

import prix from './images/juste/01.PNG'
import prix2 from './images/juste/02.PNG'
import prix3 from './images/juste/03.PNG'

import pendu from './images/pendu/game.png'
import pendu1 from './images/pendu/home.PNG'
import pendu2 from './images/pendu/win.png'
import pendu3 from './images/pendu/loose.png'
import pendu4 from './images/pendu/pictureones.png'

import sound from './images/sound/01.PNG'
import sound2 from './images/sound/foret.png'
import sound3 from './images/sound/savane.png'
import sound4 from './images/sound/pluie7.png'
import sound5 from './images/sound/game.png'
import sound6 from './images/sound/plagecitation.png'

import cat from './images/cats/01.png'
import cat2 from './images/cats/02.png'
import cat3 from './images/cats/03.PNG'
import cat4 from './images/cats/04.PNG'
import cat5 from './images/cats/05.PNG'

const projectsList = [
    {
        key: 'movie',
        label: 'movie project',
        picture: movie1,
        link: 'https://moviesearchgaetan.netlify.app/',
        github: 'https://github.com/gbasset/search-movies',
        pictures: [
            movie1,
            movie2,
            movie3,
            movie4,
            movie5,
            movie6,
        ],
        category: ['React', 'JavaScript', 'Css', ' Bootstrap'],
        keywords: ["movies", "cinema", "react"],
        devices: ['Mobile', 'Desktop'],
        infos: "Ce projet est un mini site web autour du cinéma, basé sur les données de l'Api ' The Movie Db '. La page d'accueil affiche le film le plus regardé en salle actuellement ainsi que les autres films en salles. Il offre la possibilité de rechercher des films par noms et affiche le synopsis, le casting ainsi que des bandes annonces et making-of de ce film. Il propose aussi de se laisser tenter par d'autres films par un système de recommandation de film qui se base sur la recherche précédente. "
        ,
        id: 0
    },
    {
        key: 'Jule et Lily',
        label: 'Jule et Lily',
        link: '',
        picture: juleLily,
        github: 'https://github.com/gbasset/Paris-0919-P3-Jule-et-Lily',
        pictures: [
            lily,
            lily1,
            lily2,
            lily3,
            lily4,
            lily5
        ],
        category: ['React', 'NodeJs', 'Sql', 'JavaScript', 'Css'],
        keywords: ['wild code school', 'back office', 'projet commun'],
        devices: ['Desktop'],
        infos: "Ce projet fais partie des projets du cursus de la formation de la Wild Code School en groupe. L'idée était de créer un back office pour faciliter la maintenance du site de e-commerce ' Jule et Lily ' spécialisé dans les bijoux originaux. Il permet ainsi de créer des nouvelles fiches produits, de nouvelles catégories de produits ainsi que de nouvelles promotion à appliquer sur des produit. Il offre également la possibilité egalemment l'upload d'images pour les produits et de gérer les images du slider du site .",
        id: 1
    },
    {
        key: 'Restaurant',
        label: 'Restaurant',
        picture: resto,
        link: 'https://gbasset.github.io/ebanrestaurant/',
        github: 'https://github.com/gbasset/ebanrestaurant',
        pictures: [
            resto,
            resto1,
            resto2,
            resto3,
            resto4,
            resto5
        ],
        category: ['Html', 'Css', 'Javascript '],
        keywords: ['Javascript', 'Html', 'Css'],
        devices: ['Mobile', 'Desktop'],
        infos: "Création d'un site de restauration afin de s'entrainer à différentes techniques de front-end. Le site est fait en Html / Css et avec Javascript Vanilla. Il permet de voir le menu du restaurant, acceder à une gallerie d'images et de situer le restaurant sur une carte afin de trouver les transports pour accéder au restaurant. Le site est totalement responsive",
        id: 2
    },
    {
        key: 'Skills',
        label: 'Skills',
        picture: skills1,
        link: '',
        github: 'https://github.com/gbasset/Skills-projet-2',
        pictures: [
            skills1,
            skills3,
            skills5,
            skills6,
        ],
        category: ['React', 'NodeJs', 'JavaScript', 'Css', 'Leaflet', 'Mongo DB'],
        keywords: ['nodeJS', 'React'],
        devices: ['Mobile', 'Desktop'],
        infos: "Ce projet fais partie des projets du cursus de la formation de la Wild Code School en groupe. L'idée de ce projet est de réaliser une application qui permette de géolocaliser un utilisateur pour qu'il puisse choisir des événements avec pour sujet l'IT autour de lui, ou des personnes de l'environnent IT qui désirent discuter avec d'autres personnes. Ce projet m'a permis de découvrir comment utiliser une API oppen source et découvrir la géolocalisation ",
        id: 3
    },
    {
        key: 'Beer Project',
        label: 'Beer Project',
        picture: beer1,
        link: 'https://inbeerwetrust.netlify.app/#/home',
        github: 'https://github.com/gbasset/beerProject',
        pictures: [
            beer1,
            beer2,
            beer3,
            beer4,
            beer5,
            beer6
        ],
        category: ['React', 'JavaScript', 'Css', 'Punk Api', 'LocalStorage'],
        keywords: ['shop', 'bière'],
        devices: ['Mobile', 'Desktop'],
        infos: " Ce projet est né de l'envie de créer un site autour de la bière et de l'Api 'Punk API'. J'ai donc décidé de faire un e-shop factice autour des données de cette Api et d'y ajouter la notion de prix. Le site permet de rechercher des bières par noms et catégories, de créer un panier et de le modifier, de créer une liste de favoris afin de retrouver ses bières préférées. On peut egalement effectuer l'achat du panier ou retrouvecelui-ci plus tard car il est stocké dans le localstorage ",
        id: 4
    },
    {
        key: 'game pendu',
        label: 'Jeux du pendu',
        picture: pendu4,
        link: 'https://www.hebergeur-image.com/upload/82.125.50.6-5fbd8a76e4fd1.PNG',
        github: 'https://github.com/gbasset/jeux-du-pendu-js-Vanilla',
        pictures: [
            pendu,
            pendu1,
            pendu2,
            pendu3,
            pendu4
        ],
        category: ['Javascript', 'Css', 'Html', 'Canvas'],
        keywords: ["jeux", "game"],
        devices: ['Desktop'],
        infos: "Ce projet est né de l'envie de me familiariser avec des notions de Javascript Vanilla pour maitriser le DOM . Ainsi il utilise la selection d'éléments dans le DOM, utilise des fonctions de bases de JavaScript ainsi que Canvas SVG. C'est donc une copie du jeux 'Le pendu' , le but étant de trouver un mot avec un droit à l'erreur restraint. Le jeux m'a permis de mettre en pratique des notions JavaScript afin de garder en mémoire des informations, de communiquer avec le clavier et l'utilisateur et de retourner des messages d'erreurs à celui ci. ",
        id: 5
    },
    {
        key: 'Scroll Sound',
        label: 'Scroll Sound',
        picture: scrollexp,
        link: 'https://gbasset.github.io/scrollSoundExperience/',
        github: 'https://github.com/gbasset/scrollSoundExperience',
        pictures: [
            sound,
            sound2,
            sound3,
            sound4,
            sound5,
            sound6
        ],
        category: ['Javascript', 'Css', 'Html'],
        keywords: ['Javascript', 'Html', 'Css'],
        devices: ['desktop'],
        infos: "J'avais envie de mettre en pratique des notions de CSS et Javascript autour du scroll et de l'appartition des éléménts dans le DOM mais aussi de m'amuser avec le son et le clavier. Le projet propose donc à l'utilisateur de se plonger dans un univers sonore, en appuyant sur certaines touches du clavier, un son se fait entendre",
        id: 6
    },

    {
        key: 'Cats Project',
        label: 'Cats Project',
        picture: cat,
        link: 'https://gbasset.github.io/catsProjectReact/#/',
        github: 'https://github.com/gbasset/catsProjectReact',
        pictures: [
            cat,
            cat2,
            cat3,
            cat4,
            cat5
        ],
        category: ['React', 'Cat Api', 'Css'],
        keywords: ['chats', 'cats', 'game', 'jeux'],
        devices: ['desktop'],
        infos: "J'avais envie pour m'amuser en créant un mini site autour de trois API sur les chats. J'ai donc décidé de créer une première page qui permette de faire apparaitre des gifs de chats à l'infinis en lui associant une phrase issue d'une autre Api. Puis de créer une page qui permette de rechercher des images de chats par catégories et de faire dire une chose à un chat. Et enfin de faire un jeu aléatoire avec des photographies de chats, le 'Casino Cats' dont le but est trouver trois images similaires et de ne pas perdre ses crédits",
        id: 7
    },
    {
        key: 'Le juste prix',
        label: 'Le juste prix',
        link: 'https://gbasset.github.io/JustPrice-Vanilla-Js/',
        picture: prix,
        pictures: [
            prix,
            prix2,
            prix3
        ],
        github: 'https://github.com/gbasset/JustPrice-Vanilla-Js',
        category: ['Javascript', 'Html', 'Css'],
        keywords: ['javasript', 'jeux', 'game'],
        devices: ['Mobile', 'Desktop'],
        infos: "Ce projet est né de l'envie de me familiariser avec des notions de Javascript Vanilla comme la selection d'éléments, des fonctions diverses liés au langage comme les nombres aléatoires etc ... C'est donc une copie du jeux 'Le Juste Prix' , l'idée est de trouver un prix compris entre 1 et 1000 pour un objet issue d'une liste que j'ai créé. Le prix d'un objet n'est jamais le même d'une partie à l'autre . ",
        id: 8
    },


]


export default projectsList;
