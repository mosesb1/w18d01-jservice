export default function Button(props) {
    return <button className={props.classNames.join(' ')}onClick={props.onClick}>{props.text}</button>
}