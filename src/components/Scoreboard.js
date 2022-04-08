import {useState, useEffect} from 'react';
import Button from './Button';

export default function Scoreboard({singleData, multipleData, lastButtonPressed, categoryData, randomIdx}) {
    const [score, setScore] = useState(0)
    return (
        <div className='scoreboard'>
            <h2 className="headers">Score: {score}</h2>
            <div className='buttons'>
                <Button classNames={["decrement","btn"]} onClick={(evt) => {
                    setScore(score - (lastButtonPressed === 'random' ? parseInt(singleData[0].value,10) : parseInt(categoryData.clues[randomIdx].value,10)))
                }} text='Decrement'/>
                <Button classNames={["increment","btn"]} onClick={(evt) => {
                    setScore(score + (lastButtonPressed === 'random' ? parseInt(singleData[0].value,10) : parseInt(categoryData.clues[randomIdx].value,10)))
                }} text='Increment'/>
                <Button classNames={["reset","btn"]} onClick={(evt) => {
                    setScore(0)
                }}text='Reset'/>
            </div>
        </div>
    )
}