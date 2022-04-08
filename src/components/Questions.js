import {useState, useEffect} from 'react';
import Button from './Button';
import Buttons from './Buttons';

export default function Questions({singleData, setSingleData, multipleData, setMultipleData}){
    const [singleButtonPressed, setSingleButtonPressed] = useState(false);
    const [multipleButtonPressed, setMultipleButtonPressed] = useState(false);
    const [showArray, setShowArray] = useState([true,true,true,true,true,true,true,true,true,true,true])
    let buttons = [];

    const randomUrlSingle = 'https://jservice.io/api/random';
    const randomUrlMultiple = 'https://jservice.io/api/random?count=10';

    const getDataSingle = async () => {
        const response = await fetch(randomUrlSingle);
        const apiData = await response.json();
        setSingleData(apiData);
        hideFirstButton();
    }

    const getDataMultiple = async () => {
        const response = await fetch(randomUrlMultiple);
        const apiData = await response.json();
        setMultipleData(apiData);
        hideRestButtons();
    }
    
    const setBtn = () => {
        setSingleButtonPressed(!singleButtonPressed);
    }

    const setMultipleBtn = () => {
        setMultipleButtonPressed(!multipleButtonPressed);
    }

    const hideFirstButton = () => {
        setShowArray(showArray.map((value,idx) => {
            return (
                idx === 0 ? true : value
            )
        }))
    }

    const hideRestButtons = () => {
        setShowArray(showArray.map((value,idx) => {
            return (
                idx !== 0 ? true : value
            )
        }))
    }
    
    const loaded = () => {
        return (
            <div className="questions">
                <h1 className="headers">Let's Play!</h1>
                <Button classNames={["questionBtn","btn"]} text='Get Question' onClick={setBtn} />
                <Button classNames={["questionBtn","btn"]} text='Get 10 Questions' onClick={setMultipleBtn}/>
                <div className='wrapper'>
                    <h2 className="headers">Category: </h2>
                    <p>{singleData[0].category.title}</p>
                </div>
                <div className='wrapper'>
                    <h3 className="headers">Points: </h3>
                    <p>{singleData[0].value}</p>
                </div>
                <div className='wrapper'>
                    <h2 className="headers">Question:</h2>
                    <p className='question'>{singleData[0].question}</p>
                </div>
                <Button classNames={["reveal","btn"]} text={showArray[0] ? 'Click to Reveal Answer' : singleData[0].answer} onClick={(evt) => {
                    setShowArray(showArray.map((value, idx) => {
                        return(
                            idx === 0 ? !value : value
                        )
                    }))
                }}/>
                <Buttons classNames={["reveal","btn"]} multipleData={multipleData} showArray={showArray} setShowArray={setShowArray} />
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getDataSingle();
    },[singleButtonPressed])

    // useEffect(() => {
    //     getDataMultiple();
    // }, [])

    useEffect(() => {
        getDataMultiple();
    },[multipleButtonPressed])

    
    return (
        singleData ? loaded() : loading()
    )
}