import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";

const UploadDocument = ({ selectedInfo, setSelectedInfo, setErrorMessage }) => {
  const [uploadedFile, setUploadedFile] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      const la_uploadedFiles = uploadedFile;
      for (let selectedFiles of acceptedFiles) {
        la_uploadedFiles.push(selectedFiles);
      }
      setUploadedFile(la_uploadedFiles);
      selectedInfo.uploaded_file = la_uploadedFiles;
      setSelectedInfo(selectedInfo);
      setErrorMessage("");
    }
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const files = uploadedFile.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <div className="document-type-container">
      <section className="">
        <div className="upload-document-container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
        {uploadedFile.length > 0 ? (
          <aside className="uploaded-container">
            <h5>Files</h5>
            <ul>{files}</ul>
          </aside>
        ) : null}
      </section>
    </div>
  );
};

export default UploadDocument;
