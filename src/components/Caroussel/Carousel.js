import React from 'react'
import { Link } from 'react-router-dom'

import './Carousel.css'
export default function Carousel({ sortTheArrayOfPic, arrayOfPic, isChange, direction }) {
    console.log("arrayOfPic", arrayOfPic);
    return (
        <section className="carroussel_container">
            <h1>Mes projets</h1>
            <div className="caroussel_item_container">
                <div className={!isChange ? "caroussel_item_left" : "caroussel_item_left "}>
                    <div
                        className={direction == "left" ?
                            !isChange ? "caroussel_picture_container" : "caroussel_picture_container annimLeft " :
                            !isChange ? "caroussel_picture_container" : "caroussel_picture_container annimRight "
                        }
                        style={{
                            backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[0].picture}` + ")",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div><p>
                            <i className="fas fa-link icon_link"></i>
                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: arrayOfPic && arrayOfPic[0]
                                    }
                                }}>
                                {arrayOfPic && arrayOfPic[0].label}
                            </Link>
                        </p>
                        </div>
                        {/* <img src={arrayOfPic && arrayOfPic[0].picture} alt="project pic" /> */}
                    </div>



                </div>
                <div className={!isChange ? "caroussel_item_center" : "caroussel_item_center "}>
                    <div className={direction == "left" ?
                        !isChange ? "caroussel_picture_center_container" : "caroussel_picture_center_container annimLeft " :
                        !isChange ? "caroussel_picture_center_container" : "caroussel_picture_center_container annimRight "
                    }
                        style={{
                            backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[1].picture}` + ")",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "50%"
                        }}
                    >
                        <div><p>
                            <i className="fas fa-link icon_link"></i>
                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: arrayOfPic && arrayOfPic[1]
                                    }
                                }}>
                                {arrayOfPic && arrayOfPic[1].label}
                            </Link>
                        </p>
                        </div>
                    </div>
                </div >
                <div className={!isChange ? "caroussel_item_right" : "caroussel_item_right "} >
                    <div
                        className={direction == "left" ?
                            !isChange ? "caroussel_picture_container" : "caroussel_picture_container annimLeft" :
                            !isChange ? "caroussel_picture_container" : "caroussel_picture_container annimRight"
                        }
                        style={{
                            backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[2].picture}` + ")",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        <div><p>
                            <i className="fas fa-link icon_link"></i>
                            <Link className='lien'
                                to={{
                                    pathname: `projectItem`,
                                    state: {
                                        item: arrayOfPic && arrayOfPic[2]
                                    }
                                }}>
                                {arrayOfPic && arrayOfPic[2].label}
                            </Link>
                        </p>
                        </div>
                    </div>
                </div >
            </div >
            <div className="caroussel_section_button">
                <div className="btn_project"
                    onClick={(e) => sortTheArrayOfPic("left")}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="btn_project"
                    onClick={(e) => sortTheArrayOfPic("right")}>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </section >
    )
}
