import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./universalComponents/Button";

type dataType = {
    body: string
    id: number
    title: string
    userid: number
}

function App() {
    const [data, setData] = useState<Array<dataType>>([])

    const getMeData = () => {
        setData([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className="App">
            <Button name={'Clean Data'} callBack={getMeData}/>

            {data.map(el => {
                return (
                    <ul>
                        <li key={el.id}>
                            <span>{el.id}. <b>{el.title}</b></span>
                            <div><b>Text</b>   {el.body}</div>
                        </li>
                    </ul>
                )
            })}

        </div>
    );
}

export default App;
