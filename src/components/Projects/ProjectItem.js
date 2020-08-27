import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function ProjectItem() {
    const item = useLocation()
    console.log(item);
    const itemN = item.state && item.state.item
    console.log("itemN", itemN);
    return (
        <div className="containerHight">
            {itemN &&
                <>
                    {itemN.label}
                    <a href={`${itemN.link}`} target="_blank" rel="noopener noreferrer">Voir</a>
                    {itemN.Link}
                </>
            }
        </div>
    )
}
