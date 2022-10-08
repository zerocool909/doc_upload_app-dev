import "./style.css";
import { mockData } from "./mockData";
import { useEffect, useState } from "react";

const CheckResults = ({ selectedInfo }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const tempArray = [];
    let tempObj = {};
    for (var key in mockData) {
      if (mockData.hasOwnProperty(key)) {
        tempObj = {
          name: key,
          value: mockData[key],
        };
        tempArray.push(tempObj);
      }
    }
    setInfo(tempArray);
  }, []);
  return (
    <div className="check-result-container">
      <div className="check-result-header">
        <h5>Check Result</h5>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <div>Pdf View</div>
        </div>
        <div className="col-md-6">
          <div className="check-result-container-right">
            <ul>
              {info.map((data, index) => {
                return (
                  <li key={index}>
                    <label>{data.name}</label>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        value={data.value}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResults;
