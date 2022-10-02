import "../../../../src/styles/App.css";
import Stepper from "react-stepper-horizontal/lib/Stepper";

const UplaodingDocView = (props) => {
  const { steps, activeStep, onClickNext } = props;

  return (
    <div className="box-container">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor={"#73bf45"}
        size={30}
        completeBarColor={"#73bf45"}
        completeColor={"#73bf45"}
        defaultBorderWidth={20}
      />
      {steps[activeStep].componenet}
      <button
        className="btn btn-primary btn-next"
        onClick={() => onClickNext()}
      >
        Next
      </button>
    </div>
  );
};

export default UplaodingDocView;
