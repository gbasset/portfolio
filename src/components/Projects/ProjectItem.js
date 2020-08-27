import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function ProjectItem() {
    const item = useLocation()
    console.log(item);
    const itemN = item.state && item.state.item
    return (
        <div className="containerHight">
            {itemN &&
                <>
                    {itemN.label}
                </>
            }
        </div>
    )
}
