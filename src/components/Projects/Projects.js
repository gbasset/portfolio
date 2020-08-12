import React from 'react'
import projectsList from '../../Assets/projectList'
import './Projects.css'
export default function Projects() {
    return (
        <div className="containerHight">
            <div className="construction">
                <h1>Cette page est en construction</h1>
                <h3>Merci de revenir plus tard</h3>
                {
                    projectsList.map((x, i) =>
                        <div className="project-container" key={i}>
                            {x.label}
                            <img className="pictureProject" src={x.picture} alt="" />

                        </div>
                    )
                }
            </div>
        </div>
    )
}
