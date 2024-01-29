import { iType, iColor, Shape, pos } from "../../Enum/enum";
interface Props {
    type: iType;
    name?: string;
    label?: string;
    width?: string;
    pos?: pos;
    placeholder?: string;
    customInput?: string;
    customLabel?: string;
    disabled?: boolean;
    value?: any;
    color?: iColor;
    shape?: Shape;
    function1?: (e: any) => void;
}
const Input: React.FC<Props> = ({
    type,
    name,
    label,
    width,
    pos,
    value,
    disabled,
    color,
    shape,
    placeholder,
    customInput,
    customLabel,
    function1,
}) => {
    return (
        <div style={{ width: width }}>
            {label != undefined && (type !== iType.radio && type !== iType.checkbox) && <label htmlFor={name} className={`${customLabel ? `${customLabel}` : `text-black p-2`}`} >{label}</label>}
            <input 
            type={type} 
            name={name} 
            value={value} 
            placeholder={placeholder} 
            onChange ={(e: any) => {function1?.(e);}} 
            disabled={disabled} 
            className= {`${customInput ? `${customInput}` : `border-2  ${color} ${shape} ${type == iType.text && "w-full"} ${pos}`}`} />
            {label != undefined && (type === iType.radio || type === iType.checkbox) && <label htmlFor={name} className={`${customLabel ? `${customLabel}` : `text-black p-2`}`} >{label}</label>}

        </div>


    )
};

export default Input;

