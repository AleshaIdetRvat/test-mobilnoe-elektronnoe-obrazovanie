import React, { useState } from "react"
import "./Summand.scss"

const Summand = (props) => {
    const { value, onChange, tabIndex } = props

    const [isEditMode, setIsEditMode] = useState(false)

    const onChangeSummand = (e) => onChange(+e.target.value)

    return (
        <div onClick={() => setIsEditMode(true)} className='summand'>
            <div className='summand__body'>
                {isEditMode ? (
                    <input
                        className='summand__input'
                        role='textbox'
                        tabIndex={tabIndex}
                        type='number'
                        defaultValue={value}
                        autoFocus
                        onChange={onChangeSummand}
                        onBlur={() => setIsEditMode(false)}
                    />
                ) : (
                    <span
                        className='summand__value-label'
                        tabIndex={tabIndex}
                        onFocus={() => setIsEditMode(true)}
                    >
                        {value}
                    </span>
                )}
            </div>
        </div>
    )
}

export { Summand }
