import React, { Fragment, useState } from 'react'
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { Select } from "antd"
import Comics from './xkcd'
import 'antd/dist/antd.css';

const Experiments = () => {

    const [select, setSelect] = useState('');
    const { Option } = Select;

    const displayExperiment = () => {
        switch (select){
            case 'Infinite XKCD':
                return <Comics />
            break;
            default:
                return null
        }
    }

    return (
        <Fragment>
            <ThemeContext.Consumer>
                {theme => (
                <Article theme={theme}>
                    <header>
                        <Headline title='Bored? Check these out.' theme={theme} />
                    </header>
                    <div id='experiment-dropdown'>
                        <Select defaultValue='' onChange={(e)=>{setSelect(e)}}>
                            <Option value='' disabled>Select an Experiment</Option>
                            <Option value='Infinite XKCD'>Infinite XKCD</Option>
                            <Option value='placeholder 1'>Placeholder 1</Option>
                            <Option value='placeholder 2'>Placeholder 2</Option>
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
                    `}</style>
                </Article>
                )}
            </ThemeContext.Consumer>
        </Fragment>
)}

export default Experiments

