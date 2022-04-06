import {useState, useEffect} from 'react';
import Button from './Button';

export default function Scoreboard({data}) {
    const [score, setScore] = useState(0)
    return (
        <div className='scoreboard'>
            <h2>Score: {score}</h2>
            <div className='buttons'>
                <Button onClick={(evt) => {
                    setScore(score + parseInt(data[0].value))
                }} text='Increment'/>
                <Button onClick={(evt) => {
                    setScore(score - parseInt(data[0].value))
                }} text='Decrement'/>
                <Button onClick={(evt) => {
                    setScore(0)
                }}text='Reset'/>
            </div>
        </div>
    )
}