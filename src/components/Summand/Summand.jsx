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
                        tabIndex={tabIndex}
                        className='summand__input'
                        type='number'
                        onChange={onChangeSummand}
                        onBlur={() => setIsEditMode(false)}
                        defaultValue={value}
                        autoFocus
                    />
                ) : (
                    <span
                        tabIndex={tabIndex}
                        onFocus={() => setIsEditMode(true)}
                        className='summand__value-label'
                    >
                        {value}
                    </span>
                )}
            </div>
        </div>
    )
}

export { Summand }
