import React from 'react'

type Props = {
    previewImage:any
    onChangehandler:(e:any)=>void;

}

const Inputfile:React.FC<Props> = ({previewImage,onChangehandler}) => {

    
    const layoutImage = 'border-2 border-red-400 w-10'

  return (
    <div>
        <input type="file" onChange={onChangehandler} className="filetype" />
        <div className={layoutImage}>
            <img alt="preview image" 
            src={previewImage}
            className='border-2 border-red-400 w-1/2'
            /> 
        </div>
        
    </div>
    
  )
}
export default Inputfile