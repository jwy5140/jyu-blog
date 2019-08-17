import React, { Fragment, useState } from 'react'
import { Modal } from 'antd'
import RVS from 'react-visibility-sensor'

const Comic = (props) => {
    const [visible, setVisible] = useState(false)
    const [spotlight, setSpotlight] = useState(false)

    return <Fragment>
        <li className='xkcd-comic'>
            <RVS onChange={(v)=>{setVisible(v)}}>
                <img className='comic-img' onClick={()=>setSpotlight(true)} src={props.url} />
            </RVS>
            <Modal visible={spotlight} footer={null} maskClosable={true} onCancel={()=>{setSpotlight(false)}} destroyOnClose={true} width={'85vw'} centered={true} style={{overflow: 'scroll'}}>
                <img className='comic-img-spotlight' src={props.url}/>
            </Modal>
        </li>

        {/* STYLES */}
        <style jsx>{`
            .xkcd-comic {
                padding-top: 25vh; 
                margin: 0 0 25vh 0; 
                border-top: 1.25px solid black;
                text-align: center;
            }

            .xkcd-comic:first-child {
                border-top: none;
            }

            img.comic-img {
                max-height: 65vh;
                max-width: 100%;
                opacity: ${visible ? 1 : 0};
                transition: opacity 1000ms ease-in-out;
                pointer-events: click;
            }

            img.comic-img:hover{
                cursor: pointer;
            }

            img.comic-img-spotlight{
                display: block;
                margin: 0 auto 0 auto;
                min-width: 55vw;
                max-width: 85vw;
            }

        `}</style>
        </Fragment>
}

export default Comic