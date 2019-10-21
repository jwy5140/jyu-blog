import React from 'react'
import { Link } from 'gatsby'
import { Affix } from 'antd'

const SocialPortal = () => {

    return <Affix offsetTop={window.innerHeight*.9/2}>
        <div>
            <li>
                Link 1
            </li>
            <li>
                Link 2
            </li>
            <li>
                Link 3
            </li>
        </div>
        <style jsx>{`
            div {
                position: absolute;
                height: 10vh;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            li {
                list-style-type: none;
            }    
        `}</style>
    </Affix>
}

export default SocialPortal