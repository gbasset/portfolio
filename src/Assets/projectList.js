import gamePict from './images/game.PNG'
import movie from './images/movie.png'
import juleLily from './images/dashboard_jule_et_lily.png'
import justePrice from './images/justeprix.PNG'
import catsCasino from './images/casinocats.PNG'
import scrollexp from './images/scrollexp.PNG'
import restaurant from './images/restaurant.PNG'

const projectsList = [
    {
        key: 'movie',
        label: 'movie project',
        picture: "https://www.hebergeur-image.com/upload/91.160.248.248-5f48e990a7a08.png",
        link: 'https://moviesearchgaetan.netlify.app/',
        github: 'https://github.com/gbasset/search-movies',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48e990a7a08.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48d6321fd19.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48d6321e8ce.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48d632251c2.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48d63226f9f.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48d63225b3e.PNG",

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
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f60feb90d.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f60fec3ca.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f60fecd3a.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f6275748c.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f6275864f.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f65ba2d08.png",

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
        picture: restaurant,
        link: 'https://gbasset.github.io/ebanrestaurant/',
        github: 'https://github.com/gbasset/ebanrestaurant',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f4f20523b.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f4f205d44.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f4f210b7b.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f4f212b13.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f55133453.png",
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
        picture: "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f79cecb6e.jpg",
        link: '',
        github: 'https://github.com/gbasset/Skills-projet-2',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f79cecb6e.jpg",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f757cc162.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f7456cdf8.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f74569f7c.PNG",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f757cb889.PNG",

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
        picture: "https://www.hebergeur-image.com/upload/82.125.50.6-5fbd8cd6e5ea7.PNG",
        link: 'https://inbeerwetrust.netlify.app/#/',
        github: 'https://github.com/gbasset/beerProject',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2ce794.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2cf6ec.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2cfccf.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2d51a1.png",
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
        picture: 'https://www.hebergeur-image.com/upload/82.125.50.6-5fbd8a76e4fd1.PNG',
        link: 'https://www.hebergeur-image.com/upload/82.125.50.6-5fbd8a76e4fd1.PNG',
        github: 'https://github.com/gbasset/jeux-du-pendu-js-Vanilla',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86da1ea.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86da9ee.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86de1ce.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86de8e9.png",
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
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f3a11ca60.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f3e7a16a0.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f3e7a399c.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f42013608.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f44311ded.png",
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
        picture: "https://www.hebergeur-image.com/upload/176.175.139.191-5f4bd2e42f992.png",
        link: 'https://gbasset.github.io/catsProjectReact/#/',
        github: 'https://github.com/gbasset/catsProjectReact',
        pictures: [
            "https://www.hebergeur-image.com/upload/176.175.139.191-5f4bd2e42f992.png",
            "https://www.hebergeur-image.com/upload/176.175.139.191-5f4bd2e4369eb.png",
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
        picture: 'https://www.hebergeur-image.com/upload/82.125.50.6-5fbd8d4e6b54e.PNG',
        github: 'https://github.com/gbasset/JustPrice-Vanilla-Js',
        category: ['Javascript', 'Html', 'Css'],
        keywords: ['javasript', 'jeux', 'game'],
        devices: ['Mobile', 'Desktop'],
        infos: "Ce projet est né de l'envie de me familiariser avec des notions de Javascript Vanilla comme la selection d'éléments, des fonctions diverses liés au langage comme les nombres aléatoires etc ... C'est donc une copie du jeux 'Le Juste Prix' , l'idée est de trouver un prix compris entre 1 et 1000 pour un objet issue d'une liste que j'ai créé. Le prix d'un objet n'est jamais le même d'une partie à l'autre . ",
        id: 8
    },


]


export default projectsList;
