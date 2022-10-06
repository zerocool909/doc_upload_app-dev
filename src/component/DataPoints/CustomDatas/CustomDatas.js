import { useEffect, useState } from "react";
import { customDatasArr } from "./CustomDataValues";
import "./style.css";

const CustomDatas = ({ selectedInfo, setSelectedInfo }) => {
  const [customDatas, setCustomData] = useState(customDatasArr);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const tempArr = customDatas.map(obj => obj.id === value ? { ...obj, checked: checked } : obj)
    setCustomData(tempArr)

}

  return (
    <div className="document-type-container">
      <div className="check-box-section">
        <label className="document-type-container-title">
          Please choose data types?
        </label>

        {customDatas.map((item) => {
          return (
            <div className="form-check-container">
              <input
                className="form-check-input"
                type="checkbox"
                id={item.id}
                name={item.name}
                value={item.id}
                onChange={handleChange}
                checked={item.checked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDatas;
