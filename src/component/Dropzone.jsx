import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropzone() {
const [useData, setUseData]= useState()

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    localStorage.setItem('data', JSON.stringify(file))
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const preView=(e)=>{
    e.preventDefault();

    const getData = JSON.parse(localStorage.getItem('data'));
    setUseData(getData)
  }

  return (
    <>
    <div {...getRootProps()} className="dropzone">
      <input  {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    <div className="btn-area">
    <button className="btn" onClick={(e)=>preView(e)}>Preview Form</button>

  
    </div>
    <div className="data">
      {useData?.path && (
        <h1>
        {useData?.path}
            
        </h1>
    )}
    </div>
    </>
  )
}


export default Dropzone