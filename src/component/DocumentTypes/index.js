import { useState } from "react";
import "./style.css";
const DocumentTypes = ({ selectedInfo, setSelectedInfo }) => {
  const handleChange = (optionValue) => {
    const strSelectedValue = { ...selectedInfo };
    strSelectedValue.document_types = optionValue;
    setSelectedInfo(strSelectedValue);
  };
  return (
    <div className="box-shadow">
      <label className="label-style">What kind of Document is this?</label>
      <div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
            onChange={() => handleChange("option1")}
          />
          <label className="form-check-label" htmlFor="radio1">
            Rent Roll
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="radio2"
            name="optradio"
            value="option2"
            onChange={() => handleChange("option2")}
          />
          <label className="form-check-label" htmlFor="radio2">
            Property Deed
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="radio3"
            name="optradio"
            value="option3"
            onChange={() => handleChange("option3")}
          />
          <label className="form-check-label" htmlFor="radio3">
            Closing Disclosure
          </label>
        </div>
      </div>
    </div>
  );
};

export default DocumentTypes;
