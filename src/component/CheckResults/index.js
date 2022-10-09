import "./style.css";
import { mockData } from "./mockData";
import { useEffect, useState } from "react";
import { PdfViewer } from "./PdfViewer";
import axios from "axios";
import waiting from "../../images/Waiting.gif";
import { Spinner } from "react-bootstrap";

const CheckResults = ({ selectedInfo }) => {
  const [editKey, setEditKey] = useState(null);
  const [fieldValue, setFieldValue] = useState("");
  const [info, setInfo] = useState([]);
  const [waitingLoader, setWatingLoader] = useState(false);
  const baseURL =
    "https://contractsdataextractionv1.azurewebsites.net/api/contract_extraction_function";
  const apiCalling = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: "15.pdf",
    });

    // axios
    //   .post(baseURL, {
    //     mode: 'no-cors',
    //     body: bodyContent,
    //     headers : headersList
    //   })
    //   .then((response) => {

    //   console.log('data', response.data);
    //   });

    try {
      let response = await fetch(
        "https://contractsdataextractionv1.azurewebsites.net/api/contract_extraction_function",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.text();
      console.log("data", response.body);
      setWatingLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (index, key, value) => {
    let i = 0;
    for (let eleList of info) {
      document.getElementById("span_" + i).classList.remove("d-none");
      document.getElementById("input_" + i).classList.add("d-none");
      document.getElementById("save_" + i).classList.add("d-none");
      document.getElementById("cancel_" + i).classList.add("d-none");
      document.getElementById("edit_" + i).classList.remove("d-none");
      i++;
    }
    setFieldValue(value);
    document.getElementById("input_" + index).value = value;
    document.getElementById("span_" + index).classList.add("d-none");
    document.getElementById("input_" + index).classList.remove("d-none");
    document.getElementById("save_" + index).classList.remove("d-none");
    document.getElementById("cancel_" + index).classList.remove("d-none");
    document.getElementById("edit_" + index).classList.add("d-none");
  };

  const handleSave = (i, key, value) => {
    document.getElementById("span_" + i).innerHTML = fieldValue;
    document.getElementById("span_" + i).classList.remove("d-none");
    document.getElementById("input_" + i).classList.add("d-none");
    document.getElementById("save_" + i).classList.add("d-none");
    document.getElementById("cancel_" + i).classList.add("d-none");
    document.getElementById("edit_" + i).classList.remove("d-none");
  };
  const handleClose = (index, key, value) => {
    document.getElementById("span_" + index).classList.remove("d-none");
    document.getElementById("input_" + index).classList.add("d-none");
    document.getElementById("save_" + index).classList.add("d-none");
    document.getElementById("cancel_" + index).classList.add("d-none");
    document.getElementById("edit_" + index).classList.remove("d-none");
  };

  const handleUpdateFieldValue = (value, index) => {
    setFieldValue(value);
  };

  useEffect(() => {
    const tempArray = [];
    let tempObj = {};
    apiCalling();
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
      {waitingLoader ? (
        <div className="wating-container">
          {/* <img className="waiting-img" src={waiting} alt="loading..." /> */}
          <Spinner animation="border" />
          Please Wait... Your files is being processed ......
        </div>
      ) : (
        <div className="row ">
          <div className="col-md-4">
            <div>
              <PdfViewer preview={selectedInfo.uploaded_file[0]} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="check-result-container-right">
              <ul>
                {info.map((data, index) => {
                  return (
                    <li key={index}>
                      <div className="left-title-section">
                        <label className="heading-title">{data.name}</label>
                      </div>
                      <div className="value-section ">
                        <label id={"span_" + index}>{data.value}</label>
                        <input
                          type="text"
                          className="form-control d-none"
                          id={"input_" + index}
                          onChange={(e) =>
                            handleUpdateFieldValue(e.target.value, index)
                          }
                        />
                      </div>
                      <div>
                        <i
                          id={"edit_" + index}
                          className="fa fa-edit c-pointer"
                          aria-hidden="true"
                          onClick={() =>
                            handleEdit(index, data.name, data.value)
                          }
                        ></i>
                        <i
                          id={"save_" + index}
                          className="fa fa fa-check d-none c-pointer"
                          aria-hidden="true"
                          onClick={() =>
                            handleSave(index, data.name, data.value)
                          }
                        ></i>
                        <i
                          id={"cancel_" + index}
                          className="fa fa-times d-none c-pointer"
                          aria-hidden="true"
                          onClick={() =>
                            handleClose(index, data.name, data.value)
                          }
                        ></i>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckResults;
