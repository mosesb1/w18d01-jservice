import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Questions from './components/Questions';
import {useState} from 'react';

export default function App(){
    const [data, setData] = useState(null)

    return (
        <div className='App'>
            <Header title='Welcome to Jeopardy!'/>
            <Scoreboard data={data}/>
            <Questions data={data} setData={setData}/>
        </div>
    )
}