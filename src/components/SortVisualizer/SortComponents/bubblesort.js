import React, {useState, useEffect} from 'react'
import { Button } from 'antd'

const BubbleSort = () => {

    const [arr, setArr] = useState([5,3,10,38,42,73,99,8,8,22])
    const original = '5,3,10,38,42,73,99,8,8,22'
    const sorted = '3,5,8,8,10,22,38,42,73,99'

    const handleSort = () => {
        let newArr = arr
        let save;
        let n = 0;

        while(arr.toString() !== sorted){
            if (arr[n] > arr[n+1]){
                save = arr[n]
                newArr[n] = arr[n+1]
                newArr[n+1] = save
            }
            n++
            if (n === arr.length){
                n = 0;
            }
            setArr(newArr)
        }
    }

    const stepBack = () => {
        return null
    }

    const stepForward = () => {
        return null
    }

    return <div className='bubble-sort-visual'>
        <h1>Bubble Sort</h1>
        <span>
            <Button className='step' onClick={stepBack}>{`<`}</Button>
            <Button onClick={handleSort}>Start</Button>
            <Button className='step' onClick={stepForward}>{`>`}</Button>
        </span>
        <div>
            {arr.toString()}
        </div>
        <style jsx>{`
            .bubble-sort-visual {
                text-align: center;
            }

            h1 {
                margin-bottom: 2.5vh;
            }

            .step {
                font-size: 1.5em;
            }
        `}</style>
    </div>
}

export default BubbleSort