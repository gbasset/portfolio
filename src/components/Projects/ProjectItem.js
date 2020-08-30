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
                        <AutoplaySlider className="slider"
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={4000}
                        >
                            {itemN.pictures && itemN.pictures.map((x, i) =>
                                <div key={i} data-src={x} />
                            )}

                        </AutoplaySlider>
                        <h1>{itemN.label.toUpperCase()}</h1>
                        <p className="description">{itemN.infos}</p>
                        <h2>Stack technique :</h2>
                        <ul className="list-tags">
                            {itemN.category.map((x, i) =>
                                <li key={i}> <a>{x}</a></li>
                            )}
                        </ul>
                        <div className="devices">
                            Expériences sur {itemN.devices.map(x => x + ' ')}
                        </div>
                        <div className='btn-container'>
                            {itemN.link && <a className="btn-more" href={`${itemN.link}`} target="_blank" rel="noopener noreferrer">Visiter le site</a>}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
