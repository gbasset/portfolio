import React, { useState, useEffect } from 'react'
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
export default function Home() {
    const path = useLocation()
    const [isWritteFirst, setisWritteFirst] = useState(false);
    useEffect(() => {
        console.log('', path);
        setTimeout(() => setisWritteFirst(!isWritteFirst), 2000)
    }, [])
    const handleClick = () => {

        fetch("/.netlify/functions/hello")
            .then(response => response.json())
        //   .then(json => console.log(json))
    }
    useEffect(() => handleClick(), [])
    useEffect(() => {
        document.documentElement.scrollTop = 0
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
                            <a href="#thanks"><span></span>Scroll</a>
                        </section>
                    </>
                }
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
            <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeIn'
                delay={100}
                animateOnce={true}
            >
                <div className="text">
                    <h2>Bienvenue sur mon portfolio</h2>
                    <p>

                    </p>
                    <p>
                        Ce site web est mon curiculum vitae de developpeur web, mais il est  également un espace de création où je teste de nouvelles choses sur le plan du developpement web et de l'intégration.
                        Il constitue donc également un projet à part entière dans les différents projets personnels que j'ai entreppris et que vous pourrez parcourir pendant toute la durée de votre visite sur ce site.
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

                        {projectsToHome.map((x, i) =>
                            <div className="projectHome" key={i}>

                                <Link className='lien'
                                    to={{
                                        pathname: `projectItem`,
                                        state: {
                                            item: x
                                        }

                                    }}>
                                    <img className="pictureProjectHome" width="100" src={x.picture} alt="" />
                                    <p className="nameProjectsHome">  {x.label.toLocaleUpperCase()}</p>
                                    <button className="btn"> <i className="fas fa-eye"></i></button>
                                </Link>
                            </div>
                        )}


                    </div>
                </ScrollAnimation>
            </div>
            <div className="text">
                <p>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam culpa earum quibusdam consequuntur autem harum delectus dolore expedita, optio, consequatur sed exercitationem neque, vitae excepturi voluptatibus error. Odio, excepturi beatae?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, illo quisquam blanditiis quam dolore libero impedit error. Cumque in sed, suscipit pariatur possimus accusantium excepturi incidunt quae id. Exercitationem explicabo tempora repellat eaque non illo dignissimos nostrum, nobis deleniti minima, velit sit inventore quidem autem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio vitae voluptatum, optio est esse? Dicta eaque aliquam vel, architecto optio, distinctio omnis obcaecati in amet error libero debitis delectus incidunt et necessitatibus quasi nemo veniam totam placeat odio! Voluptas, maxime ullam corporis, ut, quia dicta animi distinctio tenetur expedita alias quo perferendis facere libero quibusdam. Modi qui nihil molestias distinctio, aliquid ex quaerat explicabo id quo sapiente tenetur soluta itaque rem amet possimus. Hic sint non modi vel, deleniti nisi nulla. Soluta, at quo?
                </p>
            </div>
        </div>
    )
}
