import React, { useEffect, useState, useContext } from 'react'
import './Footer.css'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function Footer({ match }) {
    const {
        locationUrl
    } = useContext(Context)
    const [isHome, SetIsHome] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (locationUrl && locationUrl.includes('/Home')) {
            SetIsHome(true)
        }
        else {
            SetIsHome(false)
        }
    }, [locationUrl])

    const date = new Date()
    return (
        <>
            <div className="footer">
                <nav >
                    <ul>
                        {
                            !isHome &&
                            <li>
                                <Link className='lien'
                                    to={{
                                        pathname: `contact`,

                                    }}>
                                    Me contacter
                            </Link>
                            </li>
                        }
                    </ul>
                </nav>

                <div className="right_footer">
                    <div>
                        <ul className="reseaux">
                            <li><a href="https://www.linkedin.com/in/gaetan-basset-289b9410a/" target='_blank'> <i className=" fa fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/gbasset" target='_blank'> <i className="github fa fa-github "></i></a></li>
                            <li><a href="https://www.codewars.com/users/gbasset" target='_blank'> <img src="https://www.codewars.com/users/gbasset/badges/micro" alt="codewars logo" /></a></li>
                        </ul>
                    </div>
                </div>



            </div>
            <p className="copy"> &copy; Basset Gaëtan {date.getFullYear()} , Tous droits réservés.</p>
        </>
    )
}
