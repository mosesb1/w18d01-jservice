export default function Button({classNames, onClick, text}) {
    return <button className={classNames.join(' ')}onClick={onClick}>{text}</button>
}