import UplaodingDocView from "../View/UplaodingDocView";
import { useState } from "react";
import UploadDocument from "../../../component/UploadDocument";
import CheckResults from "../../../component/CheckResults";
import DataPoints from "../../../component/DataPoints";
import DocumentTypes from "../../../component/DocumentTypes";

const UplaodingDocContainer = () => {
  const [selectedInfo, setSelectedInfo] = useState({
    document_types: "",
    data_points: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Document Types",
      componenet: (
        <DocumentTypes
          selectedInfo={selectedInfo}
          setSelectedInfo={setSelectedInfo}
        />
      ),
      onClick: (e) => {
        setActiveStep(0);
      },
    },
    {
      title: "Data Points",
      componenet: (
        <DataPoints
          selectedInfo={selectedInfo}
          setSelectedInfo={setSelectedInfo}
        />
      ),
      onClick: (e) => {
        setActiveStep(1);
      },
    },
    {
      title: "Upload Document",
      componenet: (
        <UploadDocument
          selectedInfo={selectedInfo}
          setSelectedInfo={setSelectedInfo}
        />
      ),
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
    <UplaodingDocView
      steps={steps}
      activeStep={activeStep}
      onClickNext={onClickNext}
    ></UplaodingDocView>
  );
};

export default UplaodingDocContainer;
