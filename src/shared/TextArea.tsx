import { ITextArea } from '../TypesAndInterfaces/TypesAndInterfaces';
import './TextArea.css';




const TextArea = (props:ITextArea) => {
    return (
        <textarea onChange={props.onChange} value={props.value} className={props.className} placeholder={props.placeholder}></textarea>
    )
}


export default TextArea 