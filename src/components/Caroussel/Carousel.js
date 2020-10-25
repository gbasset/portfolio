import React from 'react'
import './Carousel.css'
export default function Carousel({ sortTheArrayOfPic, arrayOfPic, isChange }) {
    console.log("isChange", isChange);
    return (
        <div className="caroussel_container">
            <div className="caroussel_item_left">
                <div
                    className={!isChange ? "caroussel_picture_container" : "caroussel_picture_container annim"}
                    style={{
                        backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[0].picture}` + ")",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <button onClick={(e) => sortTheArrayOfPic("left")}>
                        left
                    </button>
                    {arrayOfPic && arrayOfPic[0].label}
                    {/* <img src={arrayOfPic && arrayOfPic[0].picture} alt="project pic" /> */}
                </div>
            </div>
            <div className={!isChange ? "caroussel_item_center" : "caroussel_item_center annim"

            }>
                <div className="caroussel_picture_center_container"
                    style={{
                        backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[1].picture}` + ")",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {arrayOfPic && arrayOfPic[1].label}
                </div>
            </div >
            <div className="caroussel_item_right">
                <div
                    className={!isChange ? "caroussel_picture_container" : "caroussel_picture_container annim"}
                    style={{
                        backgroundImage: "url(" + `${arrayOfPic && arrayOfPic[2].picture}` + ")",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <button onClick={(e) => sortTheArrayOfPic("right")}>
                        right
                    </button>
                    {arrayOfPic && arrayOfPic[2].label}
                </div>
            </div >
        </div >
    )
}
