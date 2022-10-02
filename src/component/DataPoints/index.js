import { useEffect, useState } from "react";
import "./style.css";

const DataPoints = ({ selectedInfo, setSelectedInfo }) => {
  const [allDataCheck, setAllDataCheck] = useState(false);
  const [option1Check, setOption1Check] = useState(false);
  const [option2Check, setOption2Check] = useState(false);

  useEffect(() => {
    const strSelectedValue = { ...selectedInfo };

    if (allDataCheck) {
      strSelectedValue.data_points = "allData";
    } else if (option1Check && !option2Check) {
      strSelectedValue.data_points = "option1";
    } else if (!option1Check && option2Check) {
      strSelectedValue.data_points = "option2";
    }
    setSelectedInfo(strSelectedValue);
  }, [option1Check, option2Check, allDataCheck]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (value === "all") {
      setAllDataCheck(checked);
      setOption1Check(checked);
      setOption2Check(checked);
    } else if (value === "op1") {
      setOption1Check(checked);
      if (!checked) {
        setAllDataCheck(checked);
      } else if (checked && option2Check) {
        setAllDataCheck(true);
        console.log("all", true);
      }
    } else if (value === "op2") {
      setOption2Check(checked);
      if (!checked) {
        setAllDataCheck(checked);
      } else if (option1Check && checked) {
        setAllDataCheck(true);
        console.log("all", true);
      }
    }
  };

  return (
    <div className="document-type-container">
      <label className="document-type-container-title">
        What data types do you need?
      </label>
      <div className="check-box-section">
        <div className="form-check-container">
          <input
            className="form-check-input"
            type="checkbox"
            id="check1"
            name="option1"
            value="all"
            onChange={handleChange}
            checked={allDataCheck}
          />
          <label className="classNamem-check-label" htmlFor={"check1"}>
            All data points
          </label>
        </div>
        <div className="form-check-container">
          <input
            className="form-check-input"
            type="checkbox"
            id="check2"
            name="option2"
            value="op1"
            onChange={handleChange}
            checked={option1Check}
          />
          <label className="classNamem-check-label" htmlFor={"check2"}>
            Partial Option 1
          </label>
        </div>
        <div className="form-check-container">
          <input
            className="form-check-input"
            type="checkbox"
            id="check3"
            name="option2"
            value="op2"
            onChange={handleChange}
            checked={option2Check}
          />
          <label className="classNamem-check-label" htmlFor={"check3"}>
            Partial Option 2
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataPoints;
