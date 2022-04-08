import Button from "./Button";

export default function Buttons({multipleData, showArray, setShowArray, classNames}){
    const buttons = [];
    multipleData.forEach((data, idx) => {
        buttons.push(<Button classNames={classNames} text={!showArray[idx+1] ? data.answer : data.question} onClick={(evt) => {
            setShowArray(showArray.map((value,i) => {
                return(
                    i === idx + 1 ? !value : value
                )
            }))
        }}/>)
    })

    return (
        <div className="multipleBtns">
            {buttons}
        </div>
    )
}