import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon:any;
    className?:any;
    onChangehandler:(e:any)=>void;
    value:any;
    formErrors?:any;
    formType?:any;
    inputName?:any;
}

const InputForm:React.FC<Props> = ({inputName,icon,className,onChangehandler,value,formErrors,formType}) => {

    const handleFormType = () => {
        let placeholder = inputName;
        let maxLength = 30;
        let title = '';
        let id = '';
        let name = '';
        switch (formType) {
            case 'fname' : placeholder='Firstname',
                        maxLength=20,
                        title='Please Enter Only Letters',
                        id='fname',
                        name='fname';
                        break; 
            case 'lname' : placeholder='Lastname',
                        maxLength=20,
                        title='Please Enter Only Letters',
                        id='lname',
                        name='lname';
                        break;
            case 'tel' : placeholder='Telephone Number',
                        maxLength=10,
                        title='Please Enter Only Numbers',
                        id='tel',
                        name='tel'
                        break;
            case 'address' : placeholder='Address',
                        maxLength=20,
                        title='Please Fill In Correct Information.',
                        id='address',
                        name='address'
                        break; 
            case 'email' : placeholder='E-Mail',
                        maxLength=30,
                        title='Please Fill In Correct Information.',
                        id='email',
                        name='email'; 
                        break;
            default: placeholder=inputName,
                    maxLength=30,
                    title='Please Fill In Correct Information test.',
                    id = 'sex',
                    name = 'sex'; 
        } 
        
        return { placeholder, maxLength, title, id, name };
    }

    return(
        <div className={className}>
            <FontAwesomeIcon icon={icon} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
            <input type="text" id={handleFormType().id} name={handleFormType().name} 
            className='w-full h-full rounded-3xl pl-10'
            onChange={onChangehandler}
            value={value}
            required

            placeholder={handleFormType().placeholder}
            maxLength={handleFormType().maxLength}
            title={handleFormType().title}
            />
            {formErrors && 
                <p style={{top:'45px', fontSize:'10px'}} className="text-red-500 absolute">
                    {formErrors}
                </p>
            }
      </div>      
    )
}

export default InputForm;