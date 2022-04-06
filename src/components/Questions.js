import {useState, useEffect} from 'react';
import Button from './Button';

export default function Questions({data, setData}){
    const [buttonPressed, setButtonPressed] = useState(false);
    const [hidden, setHidden] = useState(true);

    const url = 'http://jservice.io/api/random';

    const getData = async () => {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        setHidden(true);
    }

    const loaded = () => {
        return (
            <div>
                <h1>Let's Play!</h1>
                <Button text='Get Question' onClick={setBtn} />
                <h2>Category: {data[0].category.title}</h2>
                <h3>Points: {data[0].value}</h3>

                <h2>Answer: {data[0].question}</h2>
                <Button text={hidden ? 'Click to Reveal Answer' : data[0].answer} onClick={(evt) => {
                    setHidden(!hidden);
                }}/>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    const setBtn = () => {
        setButtonPressed(!buttonPressed);
    }

    useEffect(() => {
        getData();
    },[buttonPressed])
    
    return (
        data ? loaded() : loading()
    )
}