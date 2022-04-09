import {useState, useEffect} from 'react';
import Button from './Button';
import Buttons from './Buttons';

export default function Questions({singleData, setSingleData, multipleData, setMultipleData, categoryData, setCategoryData, lastButtonPressed, setLastButtonPressed, randomIdx, setRandomIdx}){
    const [singleButtonPressed, setSingleButtonPressed] = useState(false);
    const [multipleButtonPressed, setMultipleButtonPressed] = useState(false);
    const [showArray, setShowArray] = useState([true,true,true,true,true,true,true,true,true,true,true])

    const randomUrlSingle = 'https://jservice.io/api/random';
    const randomUrlMultiple = 'https://jservice.io/api/random?count=10';
    const categoryUrl = 'https://jservice.io/api/category?id=7580';

    const getDataSingle = async () => {
        try {
            const response = await fetch(randomUrlSingle);
            const apiData = await response.json();
            setSingleData(apiData);
            hideFirstButton();
        } catch (err) {
            console.error(err)
        }
    }

    const getDataMultiple = async () => {
        try{
            const response = await fetch(randomUrlMultiple);
            const apiData = await response.json();
            setMultipleData(apiData);
            hideRestButtons();
        } catch (err) {
            console.error(err)
        }
    }

    const getCategoryData = async () => {
        try {
            const response = await fetch(categoryUrl);
            const apiData = await response.json();
            setCategoryData(apiData);
        } catch (err) {
            console.error(err)
        }
    }
    
    const handleSingleClick = () => {
        setSingleButtonPressed(!singleButtonPressed);
        setLastButtonPressed('random');
    }

    const handleMultipleClick = () => {
        setMultipleButtonPressed(!multipleButtonPressed);
    }

    const handleCategoryClick = () => {
        getRandomIdx();
        setLastButtonPressed('category');
        hideFirstButton();
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

    const getRandomIdx = () => {
        setRandomIdx(Math.floor(Math.random()*categoryData.clues.length));
    }
    
    const loaded = () => {
        return (
            <div className="questions">
                <h1 className="headers">Let's Play!</h1>
                <Button classNames={["questionBtn","btn"]} text='Get Question' onClick={handleSingleClick} />
                <Button classNames={["questionBtn", "btn"]} text='Get Animal Question' onClick={handleCategoryClick} />
                <Button classNames={["questionBtn","btn"]} text='Get 10 Questions' onClick={handleMultipleClick}/>
                <div className='wrapper'>
                    <h2 className="headers">Category: </h2>
                    <p>{lastButtonPressed === 'random' ? singleData[0].category.title : "Animal words & phrases"}</p>
                </div>
                <div className='wrapper'>
                    <h3 className="headers">Points: </h3>
                    <p>{lastButtonPressed === 'random' ? singleData[0].value : categoryData.clues[randomIdx].value}</p>
                </div>
                <div className='wrapper'>
                    <h2 className="headers">Question:</h2>
                    <p className='question'>{lastButtonPressed === 'random' ? singleData[0].question : categoryData.clues[randomIdx].question}</p>
                </div>
                <Button classNames={["reveal","btn"]} text={showArray[0] ? 'Click to Reveal Answer' : lastButtonPressed === 'random' ? singleData[0].answer : categoryData.clues[randomIdx].answer} onClick={(evt) => {
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


    useEffect(() => {
        getDataMultiple();
    },[multipleButtonPressed])

    useEffect(() => {
        getCategoryData();
    }, [])

    
    return (
        singleData && categoryData ? loaded() : loading()
    )
}