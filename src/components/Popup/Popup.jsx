import React from "react"
import classNames from "classnames"
import "./Popup.scss"

const Popup = (props) => {
    const { children, isShowing } = props

    const styles = classNames({
        popup: true,
        "popup--showing": isShowing,
    })

    return (
        <div className={styles}>
            <div className='popup__container'>{children}</div>
        </div>
    )
}

export { Popup }
