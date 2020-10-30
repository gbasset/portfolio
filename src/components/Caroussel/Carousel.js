import React from 'react'
import './Carousel.css'
export default function Carousel({ sortTheArrayOfPic, arrayOfPic, isChange, direction }) {
    console.log("isChange", isChange);
    return (
        <section className="carroussel_container">
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

                        {arrayOfPic && arrayOfPic[0].label}
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
                        {arrayOfPic && arrayOfPic[1].label}
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
                        {arrayOfPic && arrayOfPic[2].label}
                    </div>
                </div >
            </div >
            <div className="caroussel_section_button">
                <button onClick={(e) => sortTheArrayOfPic("left")}>
                    left
                    </button>
                <button onClick={(e) => sortTheArrayOfPic("right")}>
                    right
                    </button>
            </div>
        </section>
    )
}
