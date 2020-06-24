import React, { useState, Fragment, useEffect } from 'react';
import { ThemeContext } from '../layouts';
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Comic from '../images/jpg/comic'
import {v4 as uuid} from 'uuid'
import { Z_BLOCK } from 'zlib';

const comicPage = () => {

    const [comics, setComics] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(()=>{
        if (fetching){
            fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${Math.floor(Math.random()*2178)}/info.0.json`)
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
        if ((document.documentElement.scrollTop + document.documentElement.offsetHeight) >= (document.querySelector('#comics').lastChild.offsetTop + document.querySelector('#comics').lastChild.scrollHeight)){
            console.log('yes')
            setFetching(true)
        }
        else{console.log('no')}
    }

    return (<Fragment>
                    <ul id='comics'>
                        {infiniteXKCD()}
                    </ul>

        {/* STYLES */}
        <style jsx>{`
            #comics{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between; 
            }
        `}
        </style>
    </Fragment>)
}

export default comicPage
