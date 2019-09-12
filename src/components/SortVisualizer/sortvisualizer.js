import React, { Fragment, useState } from 'react'

const SortVisualizer = () => {

    const [sortalgo, setSortalgo] = useState('')

    return <Fragment>
        <div id='algo-selector'>
            <button value='sort'>Sort</button>
            <button value='select'>Select</button>
            <button value='merge'>Merge</button>
        </div>
        <style jsx>{`
            #algo-selector {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 2vh auto;
                width: 50%;
            }
            #algo-selector button {
                background-color: transparent;
                border: 1px solid black;
                border-radius: 5px;
                width: 3vw;
                outline: none;
            }
            `}
        </style>
    </Fragment>
}

export default SortVisualizer