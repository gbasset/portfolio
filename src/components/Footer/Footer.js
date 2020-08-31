import React from 'react'
import './Footer.css'
export default function Footer() {
    const date = new Date()
    return (
        <>
            <div className="footer">
                <nav >
                    <ul>
                        {/* <li>Accueil </li>
                    <li>Projets</li> */}
                        <li>Me contacter</li>
                    </ul>
                </nav>

                <div className="right_footer">
                    <div>
                        <ul className="reseaux">
                            <li><a href="https://www.linkedin.com/in/gaetan-basset-289b9410a/" target='_blank'> <i className=" fa fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/gbasset" target='_blank'> <i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div></div>
                <p className="copy"> &copy; Basset Gaëtan {date.getFullYear()} , Tous droits réservés.</p>

            </div>
        </>
    )
}
