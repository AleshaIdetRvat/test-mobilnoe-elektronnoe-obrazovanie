import React from "react"
import "./Popup.scss"

const Popup = (props) => {
    const { children } = props

    return (
        <div className='popup'>
            <div className='popup__container'>{children}</div>
        </div>
    )
}

export { Popup }
