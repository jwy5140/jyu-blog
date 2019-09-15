import React, { Fragment } from 'react'
import { Affix } from 'antd'

const InfoBox = (props) => {

    const Blurb = () => {
        switch (props.selection) {
            case 'Infinite XKCD':
                return <Fragment>
                    <p>
                        I made this for fun after discovering that there was an XKCD API.
                    </p><br/>
                    <p>
                        It actually took longer than I thought to implement, as when I was first trying to create it, I encountered a CORS error (No 'Access-Control-Allow-Origin' header on the requested resource). 
                    </p><br/>
                    <p>
                        I didn't know much about CORS at that point, so I had no clue what was happening. It turns out that without this header, the BROWSER does not allow my fetch request to succeed. Without this header, the API would only be accessible from XKCD's domain. 
                    </p><br/>
                    <p>
                        To better clarify, setting this header to a splat '*' would allow any fetch request, including mine, to go through. If the header was specified as 'https://jayewe.com' then I would be able to succeed as well. The method I used to bypass Chrome's denial, was to set up a proxy to the XKCD API through AWS API Gateway, with CORS set up to allow requests from my website. It was a grueling experience - but I learned quite a bit!
                    </p>
                    </Fragment>
            case 'Sort Visualizer':
                return <Fragment>
                    <p>
                        This experiment is still TBD.
                    </p>
                    <p>
                        It will provide visualization of sorting algorithms, as many websites do online.
                    </p>
                </Fragment>
            case 'Cyclone':
                return <Fragment>
                    <p>
                        This experiment is still TBD.
                    </p>
                </Fragment>
            case 'Newbie':
                return <Fragment>
                    <p>
                        This experiment is still TBD.
                    </p>
                </Fragment>
            default:
                return null
        }
    }

    return <Affix offsetTop={typeof window !== 'undefined' ? window.innerHeight/4 : null}>
        <div className='info-card'>
            <h1 className='info-header'>
                {props.selection}
            </h1>
            <div className='info-blurb'>
                {Blurb()}
            </div>
        </div>
        {/* --- STYLES --- */}
        <style jsx>{`
            .info-header{
                margin: 1.5vh 0 1.5vh 0;
            }

            .info-card{
                margin-left: 3.5vw;
                position: absolute;
                width: 20vw;
            }

            @media only screen and (max-width: 812px){
                .info-card{
                    display: none;
                }
            }
        `}</style>
    </Affix>
}

export default InfoBox