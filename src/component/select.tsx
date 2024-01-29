import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon:any;
    className?:any;
    onChangehandler:(e:any)=>void;
    value:any
    formErrors?:any
    inputName:string
}

const select:React.FC<Props> = ({icon,className,onChangehandler,value,formErrors,inputName}) => {
    const idName = inputName.toLocaleLowerCase();

    return(
        <div className={className}>
            <FontAwesomeIcon icon={icon} style={{zIndex:'1', position:'absolute', left:'15px', color:'grey', fontSize:'15px'}}/>

            <select id={idName} name={idName}
            className="text-center  w-full h-full rounded-3xl "
            onChange={onChangehandler}
            >
            <option className="text-slate-400" value="" disabled selected>Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="lgbtq+">LGBTQ+</option>
        </select> 
        </div>
           
    )
}

export default select;
{/* <option value={value}>{value}</option>
<option value={value}>{value}</option>
<option value={value}>{value}</option> */}