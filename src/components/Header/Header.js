import React, { useState, useEffect, useContext } from 'react';


import menuIco from './Menuico.svg'
import croix from './Croix.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {


    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');

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

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {

        if (menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }


    return (
        <>
            <nav className="headerTop">
                <h1>PortFolio</h1>
                {(menu || !smallScreen) && (

                    <ul className="listeMenu">

                        <li onClick={hideMenu} className="lienNav" title='Accueil'>
                            <NavLink activeStyle={{ color: "#7bed9f" }} className="lien" exact to="/">
                                <img src="" alt="logo site" className="logo" />

                            </NavLink>
                        </li>

                        <li onClick={hideMenu} className="lienNav" title='projets'>
                            <NavLink activeStyle={{ color: "#7bed9f" }} className="lien" exact to="/projects">
                                Mes projets
                            </NavLink>
                        </li>
                        <li onClick={hideMenu} className="lienNav" title='à propos'>
                            <NavLink activeStyle={{ color: "#7bed9f" }} className="lien" exact to="/about">
                                Qui suis-je ?
                            </NavLink>
                        </li>


                    </ul>

                )}

            </nav>

            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco" />
            </div>

        </>
    )
}

