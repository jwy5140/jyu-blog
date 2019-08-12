import React, { useState, Fragment, useEffect } from 'react';
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
        if ((document.documentElement.scrollTop + document.documentElement.offsetHeight) >= (document.querySelector('#comics').lastChild.offsetTop + document.querySelector('#comics').lastChild.scrollHeight)){
            setFetching(true)
        }
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

export default ComicPage
