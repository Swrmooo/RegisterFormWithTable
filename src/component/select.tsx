import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon?:any;
    customDiv?:any;
    customTag?:any
    onChangehandler:(e:any)=>void;
    value?:any
    formErrors?:any
    inputName?:string
    inputAmount?:string[]
}

const select:React.FC<Props> = ({icon,customDiv,customTag,onChangehandler,value,inputAmount,inputName}) => {
    const idName = inputName?.toLocaleLowerCase();

    return(
        <div className={customDiv}>
            <FontAwesomeIcon icon={icon} style={{zIndex:'1', position:'absolute', left:'15px', color:'grey', fontSize:'15px'}}/>

            <select id={idName} name={idName} value={value}
            className={customTag}
            onChange={onChangehandler}
            >
            <option className="text-slate-400" value="" disabled>{inputName}</option>
            {inputAmount?.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
            {/* <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="lgbtq">LGBTQ</option> */}
        </select> 
        </div>
           
    )
}
export default select;