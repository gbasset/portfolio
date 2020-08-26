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
        picture: movie,
        link: 'https://github.com/gbasset/search-moviesz',
        github: 'https://github.com/gbasset/search-movies',
        category: 'react',
        keywords: ["movies", "cinema", "react"],
        infos: 'A movie theater nananaa',
    },
    {
        key: 'game pendu',
        label: 'Javascript game',
        picture: gamePict,
        link: 'https://gbasset.github.io/jeux-du-pendu-js-Vanilla/',
        github: 'https://github.com/gbasset/jeux-du-pendu-js-Vanilla',
        category: ' Javascript ',
        keywords: ["jeux", "game", "react"],
        infos: 'A javascript game',
    },
    {
        key: 'Jule et Lily',
        label: 'Jule et Lily',
        link: '',
        picture: juleLily,
        github: 'https://github.com/gbasset/Paris-0919-P3-Jule-et-Lily',
        category: 'React ',
        keywords: ['wild code school', 'back office', 'projet commun'],
        infos: 'Création du back office pour le site de e commerce Jule et Lily',
    },
    {
        key: 'Le juste prix',
        label: 'Le juste prix',
        link: 'https://gbasset.github.io/JustPrice-Vanilla-Js/',
        picture: justePrice,
        github: 'https://github.com/gbasset/JustPrice-Vanilla-Js',
        category: 'Javascript ',
        keywords: ['javasript', 'jeux', 'game'],
        infos: 'Jeux du juste prix en Javascript vanilla',
    },

    {
        key: 'Cats Project',
        label: 'Cats Project',
        picture: catsCasino,
        link: 'https://gbasset.github.io/catsProjectReact/#/',
        github: 'https://github.com/gbasset/catsProjectReact',
        category: 'React ',
        keywords: ['chats', 'cats', 'game', 'jeux'],
        infos: 'Création d/un mini site autour de 3 API/s sur les chats',
    },
    {
        key: 'Beer Project',
        label: 'Beer Project',
        picture: catsCasino,
        link: '',
        github: 'https://github.com/gbasset/beerProject',
        category: 'React ',
        keywords: ['shop', 'bière'],
        infos: 'Création d/un eShop avec l/API Punk API',
    },
    {
        key: 'Skills',
        label: 'Skills',
        picture: "https://github.com/gbasset/Skills-projet-2/blob/master/breakit/frontEnd/src/components/img/plancheSKILLS.jpg?raw=true",
        link: '',
        github: 'https://github.com/gbasset/Skills-projet-2',
        category: 'React ',
        keywords: ['nodeJS', 'React'],
        infos: 'Création d/une application avec NodeJs et React',
    },
    {
        key: 'Scroll Sound',
        label: 'Scroll Sound',
        picture: scrollexp,
        link: 'https://gbasset.github.io/scrollSoundExperience/',
        github: 'https://github.com/gbasset/scrollSoundExperience',
        category: 'Javascript ',
        keywords: ['Javascript', 'Css'],
        infos: 'Création d/un site basé sur les sons et les touches du clavier',
    },
    {
        key: 'Reastaurant',
        label: 'Restaurant',
        picture: restaurant,
        link: 'https://gbasset.github.io/ebanrestaurant/',
        github: 'https://github.com/gbasset/ebanrestaurant',
        category: 'Javascript ',
        keywords: ['Javascript', 'Css'],
        infos: 'Création d/un site de restauration',
    },


]


export default projectsList;
