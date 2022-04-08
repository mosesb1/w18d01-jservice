import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Questions from './components/Questions';
import {useState} from 'react';

export default function App(){
    const [singleData, setSingleData] = useState(null)
    const [multipleData, setMultipleData] = useState(null)
    const [categoryData, setCategoryData] = useState(null)
    const [lastButtonPressed, setLastButtonPressed] = useState('random');
    const [randomIdx, setRandomIdx] = useState(0);

    return (
        <div className='App'>
            <Header title='Welcome to Jeopardy!'/>
            <Scoreboard singleData={singleData} multipleData={multipleData} categoryData={categoryData} lastButtonPressed={lastButtonPressed} randomIdx={randomIdx}/>
            <Questions 
                singleData={singleData} setSingleData={setSingleData} 
                multipleData={multipleData} setMultipleData={setMultipleData}
                categoryData={categoryData} setCategoryData={setCategoryData}
                lastButtonPressed={lastButtonPressed} setLastButtonPressed={setLastButtonPressed}
                randomIdx={randomIdx} setRandomIdx={setRandomIdx}
            />
        </div>
    )
}