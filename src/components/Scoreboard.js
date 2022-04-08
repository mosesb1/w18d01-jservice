import {useState, useEffect} from 'react';
import Button from './Button';

export default function Scoreboard({singleData, multipleData}) {
    const [score, setScore] = useState(0)
    return (
        <div className='scoreboard'>
            <h2 className="headers">Score: {score}</h2>
            <div className='buttons'>
                <Button classNames={["decrement","btn"]} onClick={(evt) => {
                    setScore(score - parseInt(singleData[0].value))
                }} text='Decrement'/>
                <Button classNames={["increment","btn"]} onClick={(evt) => {
                    setScore(score + parseInt(singleData[0].value))
                }} text='Increment'/>
                <Button classNames={["reset","btn"]} onClick={(evt) => {
                    setScore(0)
                }}text='Reset'/>
            </div>
        </div>
    )
}