import { ISelect } from '../TypesAndInterfaces/TypesAndInterfaces';
import './Select.css'



const Select = (props:ISelect) => {
    return (
        <select value={props.value} className={props.className} onChange={props.onChange}>
            <option value="2 days">2 days</option>
            <option value="14 days">2 weeks</option>
            <option value="60 days">2 months</option>
            <option value="365 days">1 year</option>
            <option value="730 days">2 years</option>
        </select>
    )
}


export default Select;