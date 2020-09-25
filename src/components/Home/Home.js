import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import img from "../../Assets/images/undraw_code_thinking_1jeh.svg"
import logoReact from "../../Assets/logos/icons8-react.svg"
import jsLogo from "../../Assets/logos/icons8-javascript-logo.svg"
import htmlLogo from "../../Assets/logos/icons8-html-5.svg"
import nodejs from "../../Assets/logos/nodeJsLogo.svg"
import logoSql from "../../Assets/logos/database.svg"
import imgTools from '../../Assets/images/undraw_code_thinking_1jeh.svg'
import down from '../../Assets/logos/down-arrow.gif'
import Typewriter from 'typewriter-effect';
import { Controller, Scene } from 'react-scrollmagic';
import { NavLink, useLocation } from 'react-router-dom'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import projectsToHome from './../../Assets/projectsToHome';
import { Context } from '../../Context/Context'
export default function Home() {
    const {
        locationUrl,
        setLocationUrl
    } = useContext(Context)
    const path = useLocation()
    const [isWritteFirst, setisWritteFirst] = useState(false);
    useEffect(() => {
        setTimeout(() => setisWritteFirst(!isWritteFirst), 2000)
    }, [])
    const handleClick = () => {

        // fetch("/.netlify/functions/hello")
        //     .then(response => response.json())
        //   .then(json => console.log(json))
    }
    useEffect(() => handleClick(), [])
    useEffect(() => {
        document.documentElement.scrollTop = 0
        setLocationUrl(window.location.href)
    }, [])
    return (
        <div className="contain">
            <div className="header-home">
                <div className="names">

                    {/* <p className="hello">Bonjour, je suis</p> */}

                    <div className="hello">

                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 5,
                                changeDelay: 2
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(`Bonjour, moi c'est Gaëtan .`)
                                    .pauseFor(500)
                                    .typeString('<br>Je suis Developpeur Web .')
                                    .pauseFor(500)
                                    .deleteChars(25)
                                    //   .deleteAll()
                                    .typeString('Bonne visite !')
                                    .pauseFor(500)
                                    .start();

                            }}
                        />
                    </div>
                    {/* <p className="developpeur">Developpeur Web React</p> */}
                </div>
                <div className="image-dev">
                    <img alt="picture presentation" />
                </div>
                {isWritteFirst &&
                    <>
                        {/* <section id="section07" className="demo">
                <a><span></span><span></span><span></span>Scroll</a>
                </section> */}
                        <section id="section10" className="demo">
                            <a href="#"><span></span>Scroll</a>
                        </section>
                    </>
                }
            </div>
            <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeIn'
                delay={100}
                animateOnce={true}
            >
                <div className="text">
                    <h2 >Bienvenue sur mon portfolio</h2>
                    <p>
                        Ce site web est mon curiculum vitae de developpeur web, mais il est  également un espace de création où je teste de nouvelles choses sur le plan du developpement web et de l'intégration.
                        Il constitue donc également un projet à part entière au sein des différents projets personnels que j'ai entreppris et que vous pourrez parcourir pendant toute la durée de votre visite sur ce site.
                </p>
                </div>
            </ScrollAnimation>
            <div>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOut='fadeIn'
                    delay={100}
                    animateOnce={true}
                >
                    <div className="containerProjects">
                        <h2 className="project-title ">Projets</h2>
                        {projectsToHome.map((x, i) =>
                            <div className="projectHome" key={i}>

                                <Link className='lien'
                                    to={{
                                        pathname: `projectItem`,
                                        state: {
                                            item: x
                                        }

                                    }}>
                                    <img className="pictureProjectHome" src={x.picture} alt="" />
                                    <p className="nameProjectsHome">  {x.label.toLocaleUpperCase()}</p>
                                </Link>
                            </div>
                        )}


                    </div>
                </ScrollAnimation>
            </div>
            <div className="containerLanguages" >
                <ScrollAnimation
                    animateIn='bounceInUp'
                    animateOut='fadeOut'
                    delay={100}
                    animateOnce={true}
                >
                    <h1 className="annimationTechnos">Compétences techniques</h1>


                </ScrollAnimation>
                <div className="">
                    <ScrollAnimation
                        animateIn='bounceInUp'
                        animateOut='bounceOutLeft'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={imgTools} alt="" />
                    </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage">
                <ScrollAnimation
                    animateIn='bounceInRight'
                    animateOut='bounceOutLeft'
                    animateOnce={true}
                    delay={100}
                >
                    <h2 className="annimationLanguages"> Javascript</h2>
                </ScrollAnimation>
                <div className="imgLanguages">
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={jsLogo} alt="" />
                    </ScrollAnimation>
                </div>
            </div>

            <div className="containerLanguage">
                <ScrollAnimation
                    animateIn='bounceInUp'
                    animateOut='bounceOutRight'
                    delay={100}
                    animateOnce={true}
                >
                    <h2 className="annimationLanguages">ReactJs</h2>
                </ScrollAnimation>
                <div className="imgLanguages">
                    <ScrollAnimation
                        animateIn='bounceInRight'
                        animateOut='bounceOutLeft'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={logoReact} alt="" />
                    </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage">
                <ScrollAnimation
                    animateIn='bounceInUp'
                    animateOut='bounceOutRight'
                    delay={100}
                    animateOnce={true}
                >
                    <h2 className="annimationLanguages">Html / Css</h2>
                </ScrollAnimation>
                <div className="imgLanguages">
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOut='bounceOutRight'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={htmlLogo} alt="" />
                    </ScrollAnimation>
                </div>
            </div>

            <div className="containerLanguage">
                <ScrollAnimation
                    animateIn='bounceInUp'
                    animateOut='bounceOutLeft'
                    delay={100}
                    animateOnce={true}
                >
                    <h2 className="annimationLanguages">Sql  </h2>
                </ScrollAnimation>
                <div className="imgLanguages">
                    <ScrollAnimation
                        animateIn='bounceInRight'
                        animateOut='bounceOutLeft'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={logoSql} alt="" style={{ maxHeight: '31vh' }} />
                    </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage nodeJs">
                <ScrollAnimation
                    animateIn='bounceInUp'
                    animateOut='bounceOutRight'
                    delay={100}
                    animateOnce={true}
                >
                    <h2 className="annimationLanguages">NodeJs  </h2>
                </ScrollAnimation>
                <div className="imgLanguages ">
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                        delay={100}
                        animateOnce={true}
                    >
                        <img src={nodejs} alt="" />
                    </ScrollAnimation>
                </div>
            </div>


            <div className="contactHome">
                <Link
                    to={{
                        pathname: `contact`,

                    }}>
                    <button className="btn-contact">
                        Contacts
                    </button>
                </Link>
            </div>

        </div>
    )
}
