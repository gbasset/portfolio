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
import Carousel from './../Caroussel/Carousel';
import projectList from '../../Assets/projectList'
export default function Home() {
    const {
        locationUrl,
        setLocationUrl
    } = useContext(Context)
    const path = useLocation()
    const [isWritteFirst, setisWritteFirst] = useState(false);
    const [arrayOfPic, setArrayOfPic] = useState()
    const [firstRender, setFirstRender] = useState(true)
    const [isChange, setisChange] = useState(false)
    const [currentIndex, setCurrentIndex] = useState()
    const [direction, setDirection] = useState()
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
    const sortTheArrayOfPic = (e) => {
        setisChange(true)
        if (firstRender) {
            const newArrayOfPic = projectList.slice(0, 3)
            setCurrentIndex(0)
            setArrayOfPic(newArrayOfPic)
        } else {
            const checkIndex = (checked) => {
                if (checked === projectList.length - 1) {
                    const newArr = [projectList[projectList.length - 1], projectList[0], projectList[1]]
                    setArrayOfPic(newArr)
                }
                else if (checked === projectList.length - 2) {
                    const newArr = [projectList[checked], projectList[projectList.length - 1], projectList[0]]
                    setArrayOfPic(newArr)
                }
                else {
                    const newArrayOfPic = projectList.slice(checked, checked + 3)
                    setArrayOfPic(newArrayOfPic)
                }
            }
            if (e === 'left') {
                let current = currentIndex + 1
                current < projectList.length ? current = currentIndex + 1 : current = 0
                checkIndex(current)
                setCurrentIndex(current)
                setDirection('left')

            }
            else {
                let current = currentIndex - 1
                current = current !== -1 ? current : projectList.length - 1
                checkIndex(current)
                setCurrentIndex(current)
                setDirection('right')
            }
        }
    }
    useEffect(() => {
        sortTheArrayOfPic("right")
        setFirstRender(false)
    }, [])
    useEffect(() => {

        setTimeout(() => setisChange(false), 500)

    }, [isChange])
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
                                typewriter.typeString(`Bonjour,moi c'est Gaëtan.`)
                                    .pauseFor(500)
                                    .typeString('<br>Je suis Developpeur Web.')
                                    .pauseFor(500)
                                    .deleteChars(24)
                                    //   .deleteAll()
                                    .typeString('Bonne visite!')
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
                    <blockquote>
                        <p>
                            “ Ce site recense quelques projets personnels que j'ai entrepris seul mais également avec d'autres developpeurs. Je vous invite donc à les parcourir sur la page " Mes projets" et à me faire vos retours si vous le souhaitez . ”
                </p>
                    </blockquote>
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
                    <div className="caroussel-custom">
                        <Carousel
                            arrayOfPic={arrayOfPic}
                            sortTheArrayOfPic={(e) => sortTheArrayOfPic(e)}
                            isChange={isChange}
                            direction={direction}
                        />
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
