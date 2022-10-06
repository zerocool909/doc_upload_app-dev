import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { PDFPreview } from "./PDFPreview/PDFPreview";
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
      console.log("acceptedFiles", acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  const files = uploadedFile.map((file) => {
    return (
      <div className="preview-section" key={file.name}>
        {file.type === "application/pdf" ? (
          <div className="preview-pdf">
            <PDFPreview preview={file} />
          </div>
        ) : (
          <div className="preview-image">
            {/* <label>
              {file.path} - {file.size} bytes
            </label> */}
            <img
              src={URL.createObjectURL(file)}
              onLoad={() => {
                URL.revokeObjectURL(URL.createObjectURL(file));
              }}
            />
          </div>
        )}
      </div>
    );
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file) =>
        file.type === "application/pdf"
          ? null
          : URL.revokeObjectURL(URL.createObjectURL(file))
      );
  }, []);

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
            {/* <h5>Files</h5> */}
            {files}
          </aside>
        ) : null}
      </section>
    </div>
  );
};

export default UploadDocument;

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: "border-box",
// };

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
