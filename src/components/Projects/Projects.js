import React from 'react'
import projectsList from '../../Assets/projectList'
import './Projects.css'
export default function Projects() {
    return (
        <div className="containerHight">

            <div className="container-projet-list">

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
