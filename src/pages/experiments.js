import React, { Fragment, useState } from 'react'
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { Select } from "antd"
import Comics from '../components/XKCD/xkcd'
import 'antd/dist/antd.css';

import InfoBox from '../components/Info/infobox'

const Experiments = () => {

    const [select, setSelect] = useState('');
    const { Option } = Select;

    const displayExperiment = () => {
        switch (select){
            case 'Infinite XKCD':
                return <Comics />
            case 'Cyclone':
                return <Cyclone />
            default:
                return null
        }
    }

    return (
        <Fragment>
            <ThemeContext.Consumer>
                {theme => (
                <Fragment>
                    <InfoBox selection={select}/>
                    <Article theme={theme}>
                        <header>
                            <Headline title='Bored? Check these out.' theme={theme} />
                        </header>
                        <div id='experiment-dropdown'>
                            <Select defaultValue='' onChange={(e)=>{setSelect(e)}}>
                                <Option value='' disabled>Select an Experiment</Option>
                                <Option value='Infinite XKCD'>Infinite XKCD</Option>
                                <Option value='Cyclone'>Cyclone</Option>
                            </Select>
                        </div>
                        <div id='experiment-display'>
                            {displayExperiment()}
                        </div>

                        {/* --- STYLES --- */}
                        <style jsx>{`
                            header{
                                text-align: center;
                            }

                            #experiment-dropdown{
                                text-align: center;
                            }

                            #experiment-display{
                                width: 100%;
                            }
                        `}</style>
                    </Article>
                </Fragment>
                )}
            </ThemeContext.Consumer>
        </Fragment>
)}

export default Experiments

