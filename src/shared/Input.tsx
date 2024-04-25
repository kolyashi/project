import { Iinput } from '../TypesAndInterfaces/TypesAndInterfaces';
import './Input.css'


const Input = (props:Iinput) => {
    return (
        <input className={props.className} type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} readOnly={props.readonly} required={props.required} ></input> 
    )
    
}

export default Input;