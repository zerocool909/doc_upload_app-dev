import "../../../../src/styles/App.css";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import { useState } from "react";
import UploadDocument from "../../../component/UploadDocument";
import CheckResults from "../../../component/CheckResults";
import DataPoints from "../../../component/DataPoints";
import DocumentTypes from "../../../component/DocumentTypes";
const UplaodingDocView = () => {
  const buttonStyle = {
    background: "#E0E0E0",
    width: 200,
    padding: 16,
    textAlign: "center",
    margin: "0 auto",
    marginTop: 32,
  };
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Document Types",
      componenet: <DocumentTypes />,
      onClick: (e) => {
        setActiveStep(0);
      },
    },
    {
      title: "Data Points",
      componenet: <DataPoints />,
      onClick: (e) => {
        setActiveStep(1);
      },
    },
    {
      title: "Upload Document",
      componenet: <UploadDocument />,
      onClick: (e) => {
        setActiveStep(2);
      },
    },
    {
      title: "Check Results",
      componenet: <CheckResults />,
      onClick: (e) => {
        setActiveStep(3);
      },
    },
  ];
  const onClickNext = () => {
    if (activeStep > 2) {
      setActiveStep(0);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="App">
      <div className="box">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          size={30}
          completeBarColor={"#5096FF"}
          defaultBorderWidth={20}
        />
        {steps[activeStep].componenet}
        <button style={buttonStyle} onClick={() => onClickNext()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UplaodingDocView;
