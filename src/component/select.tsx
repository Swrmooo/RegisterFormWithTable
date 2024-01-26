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
    console.log(idName)

    const handleFormType = () => {
        
        // return { placeholder, maxLength, title, id, name };
    }

    return(
        <div className={className}>
            <FontAwesomeIcon icon={icon} style={{zIndex:'1', position:'absolute', left:'15px', color:'grey', fontSize:'15px'}}/>

            <select id={idName} name={idName}
            className="text-center  w-full h-full rounded-3xl "
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