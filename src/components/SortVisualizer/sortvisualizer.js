import React, { Fragment, useState } from 'react'
import { Button } from 'antd'

import BubbleSort from './SortComponents/bubblesort'
import SelectionSort from './SortComponents/selectionsort'
import MergeSort from './SortComponents/mergesort'
import InsertionSort from './SortComponents/insertionsort'
import HeapSort from './SortComponents/heapsort'
import QuickSort from './SortComponents/quicksort'

const SortVisualizer = () => {

    const [sortalgo, setSortalgo] = useState('')

    const handleSelect = (e) => {
        setSortalgo(e.target.value)
    }

    const displaySelect = () => {
        switch (sortalgo){
            case 'bubble':
                return <BubbleSort />;
            case 'selection':
                return <SelectionSort />;
            case 'merge':
                return <MergeSort />;
            case 'insertion':
                return <InsertionSort />;
            case 'heap':
                return <HeapSort />;
            case 'quick':
                return <QuickSort />;
            default:
                return null;    
        }
    }

    return <Fragment>
        <div id='algo-selector'>
            <Button value='bubble' onClick={handleSelect}>Bubble</Button>
            <Button value='selection' onClick={handleSelect}>Selection</Button>
            <Button value='merge' onClick={handleSelect}>Merge</Button>
            <Button value='insertion' onClick={handleSelect}>Insertion</Button>
            <Button value='heap' onClick={handleSelect}>Heap</Button>
            <Button value='quick' onClick={handleSelect}>Quick</Button>
        </div>
        <div>
            {displaySelect()}
        </div>
        {/* STYLES */}
        <style jsx>{`
            #algo-selector {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 2vh auto;
            }
            `}
        </style>
    </Fragment>
}

export default SortVisualizer