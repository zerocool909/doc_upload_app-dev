import { useState } from "react";
import CustomDatas from "./CustomDatas/CustomDatas";
import "./style.css";
const DataPoints = ({ selectedInfo, setSelectedInfo }) => {
  const [customDataShow , setcustomDataShow] = useState(false)

  const handleChange = (optionValue) => {
    const strSelectedValue = { ...selectedInfo };
    strSelectedValue.data_points = optionValue;
    setSelectedInfo(strSelectedValue);
    setcustomDataShow(optionValue === 'Customs Data')
  };
  return (
    <div className="document-type-container">
      <label className="document-type-container-title">
      What data types do you need?
      </label>
      <div className="check-box-section">
        <div className="form-check-container">
          <input
            type="radio"
            className="form-check-input"
            id="radio1"
            name="optradio"
            value="All data points"
            onChange={() => handleChange("All data points")}
          />
          <label className="form-check-label" htmlFor="radio1">
          All data points
          </label>
        </div>
        <div className="form-check-container">
          <input
            type="radio"
            className="form-check-input"
            id="radio2"
            name="optradio"
            value="Customs Data"
            onChange={() => handleChange("Customs Data")}
          />
          <label className="form-check-label" htmlFor="radio2">
          Customs Data
          </label>
        </div>
      </div>
      {customDataShow ? <CustomDatas/> : null}
    </div>
  );
};

export default DataPoints;
