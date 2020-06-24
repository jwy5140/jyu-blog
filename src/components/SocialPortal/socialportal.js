import React, { useState } from 'react'
import { Affix, Icon } from 'antd'
import RVS from 'react-visibility-sensor'

const SocialPortal = (props) => {
    
    const [visible, setVisible] = useState(false)

    return <Affix offsetTop={typeof window !== 'undefined' ? window.innerHeight*.9/2 : null}>
        <div className="social-portal">
            <li>
                <a href="https://www.linkedin.com/in/psujeffreyyu/" target="_blank">
                    <Icon type="linkedin" style={{fontSize: "7.5vh", color: "#2867B2"}}/>
                </a>
            </li>
            <RVS onChange={(v)=>setVisible(v)}>
                <li>
                    <a href="https://github.com/jwy5140" target="_blank">
                        <Icon type="github" style={{fontSize: "7.5vh", color: "black"}} />
                    </a>
                </li>
            </RVS>
        </div>
        <style jsx>{`
            div {
                position: absolute;
                height: 15vh;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
            li {
                list-style-type: none;
                opacity: ${visible ? 1 : 0};
                transition: opacity 1.5s ease-in-out;
            }   
            @media only screen and (max-width: 600px) {
                div {
                    display: none;
                }
            }
        `}</style>
    </Affix>
}

export default SocialPortal