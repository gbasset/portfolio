import React from 'react'
import projectsList from '../../Assets/projectList'
import { Link } from 'react-router-dom'
import './Projects.css'
export default function Projects() {
    return (
        <div className="containerHight">

            <div className="container-projet-list">

                {
                    projectsList.map((x, i) =>
                        <div className="project-container" key={i}>
                            {x.label}
                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: x
                                    }

                                }}>
                                <img className="pictureProject" src={x.picture} alt="" />
                                <button className="btn">Voir</button>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>

    )
}
