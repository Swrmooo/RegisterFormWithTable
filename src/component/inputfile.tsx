import React, { useState } from 'react';

type Props = {
  previewImage?:any
  onChangehandler:(value:any)=>void;
}

const Inputfile:React.FC<Props> = ({previewImage,onChangehandler}) => {
  const [preview, setPreview] = useState(previewImage);
  
  const handleUpload = (e:any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
        // onChangehandler(reader.result);
        onChangehandler(file);
      };

      reader.readAsDataURL(file);
    }
  };

  const onClickInput = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div style={{ cursor: 'pointer' }} 
    onClick={onClickInput}>
      <input type="file" onChange={handleUpload} id="fileInput" 
      style={{ display: 'none' }} 
      
      />
      <img
        src={preview}
        style={{border:'5px solid #83C3FF', width: '200px', height: '200px', borderRadius: '100%' }}
      />
    </div>
  )
}
export default Inputfile