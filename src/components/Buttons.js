import Button from "./Button";

export default function Buttons({multipleData, showArray, setShowArray, classNames}){

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loaded = () => {
        const buttons = multipleData.map((data, idx) => {
            return (
                <Button 
                    classNames={classNames} 
                    text={!showArray[idx+1] ? data.answer : data.question} 
                    key={idx} 
                    onClick={(evt) => {
                        setShowArray(showArray.map((value,i) => {
                            return(
                                i === idx + 1 ? !value : value
                            )
                        }))
                    }}
                />
            )
        })
    
        return (
            <div className="multipleBtns">
                {buttons}
            </div>
        )
    }
    return multipleData ? loaded() : loading()
}