import {useState, useEffect} from 'react';
import Button from './Button';

export default function Questions({data, setData}){
    const [buttonPressed, setButtonPressed] = useState(false);
    const [hidden, setHidden] = useState(true);

    const url = 'https://jservice.io/api/random';

    const getData = async () => {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        setHidden(true);
    }

    const loaded = () => {
        return (
            <div className="questions">
                <h1 className="headers">Let's Play!</h1>
                <Button classNames={["questionBtn","btn"]} text='Get Question' onClick={setBtn} />
                <div className='wrapper'>
                    <h2 className="headers">Category: </h2>
                    <p>{data[0].category.title}</p>
                </div>
                <div className='wrapper'>
                    <h3 className="headers">Points: </h3>
                    <p>{data[0].value}</p>
                </div>
                <div className='wrapper'>
                    <h2 className="headers">Answer:</h2>
                    <p className='question'>{data[0].question}</p>
                </div>
                <Button classNames={["reveal","btn"]} text={hidden ? 'Click to Reveal Answer' : data[0].answer} onClick={(evt) => {
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