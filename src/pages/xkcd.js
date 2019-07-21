import React, { useState, Fragment, useEffect } from 'react';
import { ThemeContext } from '../layouts';
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import sr from 'scrollreveal'
import uuid from 'uuid/v4'
import { Z_BLOCK } from 'zlib';

const comicPage = props => {

    sr().reveal('div#comics')

    const [comics, setComics] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(()=>{
        if (fetching){
            Promise.all([
                fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${Math.floor(Math.random()*2178)}/info.0.json`),
                fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${Math.floor(Math.random()*2178)}/info.0.json`),
                fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${Math.floor(Math.random()*2178)}/info.0.json`)
            ])
            .then(([resp1, resp2, resp3])=>Promise.all([resp1.json(), resp2.json(), resp3.json()]))
            .then(([json1, json2, json3])=>{
                setComics([...comics, json1.img, json2.img, json3.img]);
                setFetching(false)
            })
        }
    }, [fetching])

    const infiniteXKCD = () => {
        if (comics.length){
            return comics.map((comic)=>{
                return <img key={uuid()} src={comic} style={{display: 'block', margin: '0 auto 12.5% auto'}}/>
            })
        }
    }

    const handleScroll = () => {
        if ((window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight){
            setFetching(true)
        }
    }

    return (<Fragment>
        <ThemeContext.Consumer>
            {theme => (
                <Article theme={theme} >
                    <header>
                        <Headline title="Need a break? Here's some xkcd!" theme={theme} />
                    </header>
                    <div id='comics' >
                        {infiniteXKCD()}
                    </div>
                </Article>
                )}
        </ThemeContext.Consumer>
    </Fragment>)
}

export default comicPage


