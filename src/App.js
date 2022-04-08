import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Questions from './components/Questions';
import {useState} from 'react';

export default function App(){
    const [singleData, setSingleData] = useState(null)
    const [multipleData, setMultipleData] = useState(null)

    return (
        <div className='App'>
            <Header title='Welcome to Jeopardy!'/>
            <Scoreboard singleData={singleData} multipleData={multipleData}/>
            <Questions 
                singleData={singleData} setSingleData={setSingleData} 
                multipleData={multipleData} setMultipleData={setMultipleData}
            />
        </div>
    )
}