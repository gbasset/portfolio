import gamePict from './images/game.PNG'
import movie from './images/movie.png'
import juleLily from './images/dashboard_jule_et_lily.png'
import justePrice from './images/justeprix.PNG'
import catsCasino from './images/casinocats.PNG'
import scrollexp from './images/scrollexp.PNG'
import restaurant from './images/restaurant.PNG'

const projectsToHome = [
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
    },
]


export default projectsToHome;
