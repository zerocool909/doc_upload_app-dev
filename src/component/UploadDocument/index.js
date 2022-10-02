import React, { useEffect } from "react";
import {useDropzone} from 'react-dropzone';
import "./style.css";

const UploadDocument = ({ selectedInfo, setSelectedInfo }) => {
  useEffect(() => {
    console.log('selectedInfo', selectedInfo);;
  }, []);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="document-type-container">
    <section className="container">
      <div className="body">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      </div>
      {files.length > 0 ? <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      : null}
    </section>
    </div>
  );
};

export default UploadDocument;
