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
        category: ['React', 'JavaScript', 'Css'],
        keywords: ["movies", "cinema", "react"],
        infos: "Ce projet est un mini site web sur le cinéma, basé autour des données de l'Api ' The Movie Db '. La page d'accueil affiche le film de plus regardé en salle actuellement ainsi que les autres films en salles. Il offre la possibilité de rechercher des films par noms et affiche le synopsis, lu casting ainsi que des bandes annonces et making of de ce film. Il permet aussi de se laisser tenter par d'autres films avec un système de recommandation de film basé sur la recherche précédente. "
        ,
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
        infos: 'Création du back office pour le site de e commerce Jule et Lily',
    },
    {
        key: 'Reastaurant',
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
        category: ['Javascript '],
        keywords: ['Javascript', 'Html', 'Css'],
        infos: 'Création d/un site de restauration',
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
        category: ['React', 'NodeJs', 'JavaScript', 'Css'],
        keywords: ['nodeJS', 'React'],
        infos: 'Création d/une application avec NodeJs et React',
    },
    {
        key: 'Beer Project',
        label: 'Beer Project',
        picture: "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2ce794.png",
        link: '',
        github: 'https://github.com/gbasset/beerProject',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2ce794.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2cf6ec.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2cfccf.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48f9b2d51a1.png",
        ],
        category: ['React', 'JavaScript', 'Css', 'Punk Api'],
        keywords: ['shop', 'bière'],
        infos: 'Création d/un eShop avec l/API Punk API',
    },
    {
        key: 'game pendu',
        label: 'Jeux du pendu',
        picture: gamePict,
        link: 'https://gbasset.github.io/jeux-du-pendu-js-Vanilla/',
        github: 'https://github.com/gbasset/jeux-du-pendu-js-Vanilla',
        pictures: [
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86da1ea.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86da9ee.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86de1ce.png",
            "https://www.hebergeur-image.com/upload/91.160.248.248-5f48eb86de8e9.png",
        ],
        category: ['Javascript', 'Css', 'Html'],
        keywords: ["jeux", "game"],
        infos: 'A javascript game',
    },
    {
        key: 'Le juste prix',
        label: 'Le juste prix',
        link: 'https://gbasset.github.io/JustPrice-Vanilla-Js/',
        picture: justePrice,
        github: 'https://github.com/gbasset/JustPrice-Vanilla-Js',
        category: ['Javascript', 'Html', 'Css'],
        keywords: ['javasript', 'jeux', 'game'],
        infos: 'Jeux du juste prix en Javascript vanilla',
    },

    {
        key: 'Cats Project',
        label: 'Cats Project',
        picture: catsCasino,
        link: 'https://gbasset.github.io/catsProjectReact/#/',
        github: 'https://github.com/gbasset/catsProjectReact',
        category: ['React', 'Cat Api', 'Css'],
        keywords: ['chats', 'cats', 'game', 'jeux'],
        infos: 'Création d/un mini site autour de 3 API/s sur les chats',
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
        category: ['Javascript '],
        keywords: ['Javascript', 'Html', 'Css'],
        infos: 'Création d/un site basé sur les sons et les touches du clavier',
    },



]


export default projectsList;
