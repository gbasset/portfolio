import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './ProjectItem.css'
export default function ProjectItem() {
    const item = useLocation()
    console.log(item);
    const itemN = item.state && item.state.item
    console.log("itemN", itemN);
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="containerHight">
            <div className="containerProject">
                {itemN &&
                    <>
                        <h1>{itemN.label.toUpperCase()}</h1>
                        <AutoplaySlider className="slider"
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={4000}
                        >
                            {itemN.pictures && itemN.pictures.map((x, i) =>
                                <div key={i} data-src={x} />
                            )}

                        </AutoplaySlider>
                        <p>{itemN.infos}</p>
                        {itemN.link && <a href={`${itemN.link}`} target="_blank" rel="noopener noreferrer">Visiter le site</a>}
                        <h2>Stack technique :</h2>
                        <ul>
                            {itemN.category.map(x =>
                                <>{x}</>
                            )}
                            <li></li>
                        </ul>
                    </>
                }
            </div>
        </div>
    )
}
