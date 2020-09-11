import React, { useEffect } from 'react'
import udemy from "../../Assets/logos/udemy_logo_icon_144775.png"
import openClassroom from "../../Assets/logos/Logo_OpenClassrooms.png"
import netifly from "../../Assets/logos/iconfinder_netlify_4691413.png"
import pdf from "../../Assets/gaetancv.pdf"
import './About.css'
export default function About() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])
    return (
        <div className="containerHight">
            {/* <div className="construction">
                <h1>Cette page est en construction</h1>
                <h3>Merci de revenir plus tard</h3>

            </div> */}
            <h2>Gaëtan Basset</h2>
            <div className="propos">
                <div className="photoProfil" />
                <div className="rightContainer">

                    {/* <img className="photoProfil" src={img} alt="Profil de Gaëtan Basset" /> */}
                    <p>Bonjour à tous, je suis développeur web, je réalise des tâches diverses liées aux différentes parties qui composent la création d'un site web et d'une application web. Reflexion autour de la conception de la base de donnée, création d'une Api pour faire intéragir les données avec le front-end et le back-end. Passioné par les nouvelles technologies,
                    j'ai entrepris en 2019 une reconversion dans le web en suivant une formation à la Wild Code School de Paris. Depuis je pratique mes acquis au sein de projet personnels et au sein de l'entreprise qui m'emploi 'Beyable' dans laquelle j'effectue différentes tâches comme de l'intégration et du developpement de nouvelles fonctionnalitées au sein du back office. </p>
                </div>
            </div>
            <div>
                <h2>Mes outils</h2>
                <ul className="list-tags-outils">
                    <li>Html <i className="fab fa-html5"></i></li>
                    <li>Css <i className="fab fa-css3-alt"></i></li>
                    <li>JavaScript <i className="fab fa-js"></i></li>
                    <li>Node JS <i className="fab fa-node"></i></li>
                    <li>ReactJS <i className="fab fa-react"></i></li>
                    <li>Bootstrap <i className="fab fa-bootstrap"></i></li>
                    <li>Sql <i className="fas fa-database"></i></li>
                    <li>Netlify <img src={netifly} alt="" /></li>
                    <li>Git  <i className="git fa fa-github"></i></li>
                    <li>Vs Code <img src="https://img.icons8.com/ios-filled/500/000000/visual-studio-logo.png" alt="visual studio icon" />
                    </li>
                </ul>
            </div>
            <div>
                <h2>Formations</h2>
                <ul className="list-tags-format">
                    <li>Développeur Web et Web Mobile - Wild Code School Paris <img className="wild" src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959" alt="wild code school logo" /></li>
                    <li>Apprenez à créer votre site web avec HTML5 et CSS3 - OpenClassRooms <img className="openClass" src={openClassroom} alt="openClassroom logo" /></li>
                    <li>JavaScript : ES6  <img className="udemy" src={udemy} alt="udemy logo" /></li>
                    <li>Apprenez à résoudre des algorithmes en JavaScript  <img className="udemy" src={udemy} alt="udemy logo" /></li>
                    <li>React A à Z (React Hooks)  <img className="udemy" src={udemy} alt="udemy logo" /></li>
                    <li>Node.js / Express.js / JWT / Mongoose par la pratique   <img className="udemy" src={udemy} alt="udemy logo" /></li>
                    <li>Bootstrap 4  <img className="udemy" src={udemy} alt="udemy logo" /></li>
                    <li>Comprendre le web - OpenClassRooms  <img className="openClass" src={openClassroom} alt="openClassroom logo" /></li>
                </ul>
            </div>
            <div className='btn-container'>
                <a className="btn-more" target="_blank" href={pdf} download="./gaetancv.pdf" >Telecharger mon CV</a>
            </div>
        </div >
    )
}
