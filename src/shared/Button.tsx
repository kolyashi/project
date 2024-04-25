import { IProps } from '../TypesAndInterfaces/TypesAndInterfaces';
import './Button.css'



const Button = (props:IProps) => {
    return (
        <button type="button" className={props.className} onClick={(props.onClick)}>
            {props.action === 'add' ? 'Добавить' : 'X' && props.action === "openModal" ? 'Start Sprint' : 'Cancel' && props.action === "Start Sprint" ? 'Start Sprint' : 'Cancel' && props.action === 'Remove'}
            {props.children}
        </button>
    )
}

export default Button;