import React from 'react'
import img from "../../Assets/images/téléchargement.png"
import './About.css'
export default function About() {
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
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript Es6</li>
                    <li>Node JS</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Vs Code</li>
                </ul>
            </div>
            <div>
                <h2>Formations</h2>
                <ul>
                    <li>Wild Code School</li>
                    <li>Udemy</li>
                    <li>LALALA</li>
                </ul>
            </div>
        </div>
    )
}
