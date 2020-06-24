import React, { useState } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs;

const Newbie = () => {
    const [choice, setChoice] = useState('1')

    

    return(
        <div id="Newbie">
            <Tabs type="card" onChange={(e)=>setChoice(e)} activeKey={choice}>
                <TabPane tab="Github Jobs" key="1">
                    <p>Placeholder 1</p>
                    <p>Placeholder 2</p>
                </TabPane>
                <TabPane tab="Indeed" key="2">
                    <p>Placeholder 3</p>
                    <p>Placeholder 4</p>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Newbie;