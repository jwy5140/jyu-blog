import React, { useState, Fragment, useEffect, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa/";
import Comic from './comic'
import uuid from 'uuid/v4'

const ComicPage = () => {

    const [comics, setComics] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(()=>{
        if (fetching){
            fetch(`https://3dq440kes5.execute-api.us-east-1.amazonaws.com/Production?comicID=${Math.floor(Math.random()*2178)}`)
            .then(resp=>resp.json())
            .then(json=>{
                setComics([...comics, json.img])
            })
            .then(setFetching(false))
        }
    }, [fetching])

    const infiniteXKCD = () => {
            return comics.map((comic)=>{
                return <Comic key={uuid()} url={comic} />
            })
    }

    const handleScroll = () => {
        if ((document.documentElement.scrollTop + window.innerHeight) >= (document.documentElement.scrollHeight-window.innerHeight/2)){
            setFetching(true)
        }
    }

    const separator = useRef();

    const scrollToContent = e => {
      separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    return (<Fragment>
                    <ul id='comics'>
                        <div className='xkcd-header'>
                            <h1 className='mobile-warn'>NOTE: This experiment currently incompatible with mobile.</h1>
                            <h1>Scroll Down</h1>
                            <button onClick={scrollToContent} aria-label="scroll">
                                <FaChevronDown />
                            </button>
                        </div>
                        <hr ref={separator} />
                        {infiniteXKCD()}
                    </ul>

        {/* STYLES */}
        <style jsx>{`
            hr {
                opacity: 0;
            }

            .xkcd-header{
                text-align: center;
                padding-top: 25vh;
                margin: 0 0 50vh 0;
            }

            .mobile-warn{
                display: none;
            }

            #comics{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between; 
            }
            
            button {
                background: rgb(0, 0, 0, 0);
                border: none;
                border-radius: 50%;
                font-size: 1.35em;
                padding: 10px 20px;
                cursor: pointer;
                width: 80px;
                height: 80px;

                &:focus{
                    outline-style: none;
                }
      
                :global(svg) {
                  position: relative;
                  top: 5px;
                  fill: black;
                  stroke-width: 40;
                  stroke: #ffffff;
                  animation-duration: 1s;
                  animation-name: buttonIconMove;
                  animation-iteration-count: infinite;
                }
              }
      
              @keyframes buttonIconMove {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
                100% {
                  transform: translateY(0);
                }
              }
              
              @media only screen and (max-width: 812px){
                .mobile-warn{
                    display: block;
                    margin-bottom: 2vh;
                }
            }
        `}
        </style>
    </Fragment>)
}

export default ComicPage
