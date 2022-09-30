import { useEffect, useState } from "react";
import "./style.css";

const DataPoints = () => {
  const [allDataCheck, setAllDataCheck] = useState(false);
  const [option1Check, setOption1Check] = useState(false);
  const [option2Check, setOption2Check] = useState(false);

  // useEffect(() => {
  //   if(option1Check && option2Check)
  //   setAllDataCheck(true)
  // }, [option1Check])

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (value == "all") {
      setAllDataCheck(checked);
      setOption1Check(checked);
      setOption2Check(checked);
    } else if (value == "op1") {
      setOption1Check(checked);
      if (!checked) {
        setAllDataCheck(checked);
      } else if (checked && option2Check) {
        setAllDataCheck(true);
        console.log("all", true);
      }
    } else if (value == "op2") {
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
    <div class="box-shadow">
      <label class="label-style" for="radio1">
        What data types do you need?
      </label>
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="check1"
            name="option1"
            value="all"
            onChange={handleChange}
            checked={allDataCheck}
          />
          <label class="form-check-label">All data points</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="check2"
            name="option2"
            value="op1"
            onChange={handleChange}
            checked={option1Check}
          />
          <label class="form-check-label">Partial Option 1</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="check3"
            name="option2"
            value="op2"
            onChange={handleChange}
            checked={option2Check}
          />
          <label class="form-check-label">Partial Option 2</label>
        </div>
      </div>
    </div>
  );
};

export default DataPoints;
