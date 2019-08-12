import React, { Fragment, useState } from 'react'
import RVS from 'react-visibility-sensor'

const Comic = (props) => {
    const [visible, setVisible] = useState (false)

    return <Fragment>
        <li className='xkcd-comic'>
            <RVS partialVisibility onChange={(v)=>{setVisible(v)}}>
                <img className='comic-img' src={props.url} />
            </RVS>
        </li>

        {/* STYLES */}
        <style jsx>{`
            .xkcd-comic {
                padding-top: 25vh; 
                margin: 0 0 25vh 0; 
                border-top: 1px solid #333;
                text-align: center;
            }

            .xkcd-comic:first-child {
                border-top: none;
            }

            img.comic-img {
                opacity: ${visible ? 1 : .1};
                transition: opacity 2000ms ease-in-out;
            }
        `}</style>
        </Fragment>
}

export default Comic