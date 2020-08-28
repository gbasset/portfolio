import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

export default function ProjectItem() {
    const item = useLocation()
    console.log(item);
    const itemN = item.state && item.state.item
    console.log("itemN", itemN);
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="containerHight">
            {itemN &&
                <>
                    <h1>{itemN.label}</h1>
                    {itemN.link && <a href={`${itemN.link}`} target="_blank" rel="noopener noreferrer">Voir</a>}
                    <AutoplaySlider className="slider"
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={4000}
                    >
                        {itemN.pictures && itemN.pictures.map(x =>
                            <div data-src={x} />
                        )}

                    </AutoplaySlider>


                </>
            }
        </div>
    )
}
