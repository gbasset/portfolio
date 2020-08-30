import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">

            <nav >
                <ul>
                    <li>Accueil </li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="right_footer">
                <div>
                    <ul className="reseaux">
                        <li><a href="https://www.linkedin.com/in/gaetan-basset-289b9410a/" target='_blank'> <i class=" fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/gbasset" target='_blank'> <i class="fa fa-github"></i></a></li>
                    </ul>
                </div>
                <div>
                    <h3>&copy; Basset Gaëtan</h3>
                </div>
            </div>

        </div>
    )
}
