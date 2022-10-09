import "./style.css";
import { mockData } from "./mockData";
import { useEffect, useState } from "react";
import { PdfViewer } from "./PdfViewer";
import axios from "axios";
import waiting from '../../images/Waiting.gif'
import { Spinner } from "react-bootstrap";

const CheckResults = ({ selectedInfo }) => {
  const [info, setInfo] = useState([]);
  const [waitingLoader, setWatingLoader] = useState(false)
  const baseURL = "https://contractsdataextractionv1.azurewebsites.net/api/contract_extraction_function"
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
      console.log('data', response.body);
      setWatingLoader(false)
    } catch (err) {
      console.log(err);
    }
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
      {waitingLoader ?
      <div className="wating-container">
      {/* <img className="waiting-img" src={waiting} alt="loading..." /> */}
      <Spinner animation="border" />
        Please Wait...
        Your files is being  processed ......
      </div>
      :
      <div className="row ">
        <div className="col-md-6">
          <div>
            <PdfViewer preview={selectedInfo.uploaded_file[0]} />
          </div>
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
                    <span >
            <i className="fa fa-edit" aria-hidden="true"></i>
          </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> 
    }
    </div>
  );
};

export default CheckResults;
