import React, { useState, useEffect, useContext } from 'react'
import projectsList from '../../Assets/projectList'
import { Link } from 'react-router-dom'
import './Projects.css'
import { Context } from '../../Context/Context'
export default function Projects() {
    const {
        locationUrl,
        setLocationUrl
    } = useContext(Context)
    const [smallScreen, setSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }
    useEffect(() => {
        document.documentElement.scrollTop = 0
        setLocationUrl(window.location.href)
    }, [])
    return (
        <div className="containerHight">

            <div className="container-projet-list">

                {!smallScreen ?
                    projectsList.map((x, i) =>
                        <div className="project-container" key={i}>

                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: x
                                    }

                                }}>
                                <img className="pictureProject" src={x.picture} alt="" />
                                <p className="nameProjects">  {x.label.toLocaleUpperCase()}</p>
                                <button className="btn"> <i className="fas fa-eye"></i></button>
                            </Link>
                        </div>
                    )
                    :
                    projectsList.map((x, i) =>
                        <div className="project-container2" key={i}>

                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: x
                                    }

                                }}>
                                <img className="pictureProject" src={x.picture} alt="" />
                                <p className="nameProjects2">  {x.label.toLocaleUpperCase()}</p>
                                <button className="btn2"> <i className="fas fa-eye"></i></button>
                            </Link>
                        </div>
                    )

                }
            </div>

        </div>

    )
}
