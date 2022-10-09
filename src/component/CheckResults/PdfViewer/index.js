import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./style.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export const PdfViewer = ({ preview, setPreview }) => {
  const [file, setFile] = useState(preview);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="Pdf">
      {/* <div className="Pdf__container"> */}
        <div className="Pdf__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="bottom_section_pdf">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              ‹
            </button>
            <span>
              {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </span>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              ›
            </button>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
