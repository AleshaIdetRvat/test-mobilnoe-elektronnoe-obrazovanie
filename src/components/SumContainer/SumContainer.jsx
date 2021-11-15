import React, { useState } from "react"
import { Popup } from "../Popup/Popup"
import { Summand } from "../Summand/Summand"
import "./SumContainer.scss"

const SumContainer = () => {
    const [sumResults, setSumResults] = useState([])
    console.log(sumResults)

    const [firstSummand, setFirstSummand] = useState(0)
    const [secondSummand, setSecondSummand] = useState(0)

    const addNewResult = (e) => {
        e.preventDefault()

        const newValue = firstSummand + secondSummand

        if (sumResults.length === 8) {
            setSumResults([...sumResults.slice(1), newValue])
        } else {
            setSumResults([...sumResults, newValue])
        }
    }

    return (
        <div className='sum'>
            <div className='sum__container'>
                <form onSubmit={addNewResult} className='sum__column'>
                    <header className='sum__result'>
                        <Popup isShowing={sumResults.length !== 0}>
                            {[...sumResults].reverse().join(" ,")}
                        </Popup>
                    </header>

                    <div className='sum__summands'>
                        <Summand
                            tabIndex='1'
                            value={firstSummand}
                            onChange={setFirstSummand}
                        />
                        +
                        <Summand
                            tabIndex='2'
                            value={secondSummand}
                            onChange={setSecondSummand}
                        />
                    </div>

                    <div className='sum__btns-block'>
                        <button
                            className='sum__solve-btn'
                            tabIndex='3'
                            type='submit'
                        >
                            Посчитать
                        </button>

                        <button
                            className='sum__reset-btn'
                            onClick={(e) => {
                                e.preventDefault()
                                setSumResults([])
                            }}
                            tabIndex='4'
                        >
                            Сбросить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SumContainer
