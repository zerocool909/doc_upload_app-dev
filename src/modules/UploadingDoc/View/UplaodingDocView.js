import "../../../../src/styles/App.css";
import Stepper from "react-stepper-horizontal/lib/Stepper";

const UplaodingDocView = (props) => {
  const { steps, activeStep, onClickNext, errorMessage } = props;

  return (
    <div className="box-container">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor={"#73bf45"}
        size={40}
        circleTop={50}
        circleFontSize={15}
        completeBarColor={"#73bf45"}
        completeColor={"#73bf45"}
      />
      {steps[activeStep].componenet}
      <div className="error-section">
        <small>{errorMessage}</small>
      </div>
      {steps !== 3 && <button
        className="btn btn-primary btn-next"
        onClick={() => onClickNext()}
      >
        Next
      </button>}
    </div>
  );
};

export default UplaodingDocView;
