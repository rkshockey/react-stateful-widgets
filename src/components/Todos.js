import React, { useImperativeHandle, useState } from 'react'

export default function Todos(){
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState(``)
console.log(list)

    const changeInput = evt => {
        const { value } = evt.target;
        setInputValue(value)
    };

    const listAdd = () => {
        const listTemp = list
        listTemp.push(inputValue)
        setList(listTemp)
    }

    const listRemove = (point) => {
        for (i = 0; i < list.length; i++){
            if (point === list[i]){
                list.splice(i, 1)
            }
        }
    }

    const listOutput = () => {
        const listOut = []
        for (i = 0; i < list.length; i++){
            <button onClick={listRemove(list[i])}>{list[i]}</button>
        }
        return listOut
    }

    return (
        <div className='widget-programmers container'>
            <h2>To-Do</h2>
            <div className='todos'>
                
            </div>
            <input id='input' type='text' onChange={changeInput} value={inputValue} />
            <button onClick={listAdd}>Add to list</button>
        </div>
    )
}