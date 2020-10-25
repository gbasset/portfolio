import React from 'react'
import './Carousel.css'
export default function Carousel({ sortTheArrayOfPic, arrayOfPic }) {
    return (
        <div className="caroussel_container">
            <div className="caroussel_item_left">
                <div className="caroussel_picture_container">
                    <button onClick={(e) => sortTheArrayOfPic("left")}>
                        left
                    </button>
                    {arrayOfPic && arrayOfPic[0].label}
                    <img src={arrayOfPic && arrayOfPic[0].picture} alt="project pic" />
                </div>
            </div>
            <div className="caroussel_item_center">
                <div className="caroussel_picture_center_container">
                    {arrayOfPic && arrayOfPic[1].label}
                    <img src={arrayOfPic && arrayOfPic[1].picture} alt="project pic" />
                </div>
            </div>
            <div className="caroussel_item_right">
                <div className="caroussel_picture_container">
                    <button onClick={(e) => sortTheArrayOfPic("right")}>
                        right
                    </button>
                    {arrayOfPic && arrayOfPic[2].label}
                    <img src={arrayOfPic && arrayOfPic[2].picture} alt="project pic" />
                </div>
            </div>

        </div>
    )
}
