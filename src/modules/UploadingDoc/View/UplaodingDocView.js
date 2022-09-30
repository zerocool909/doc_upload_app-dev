import "../../../../src/styles/App.css";
import Stepper from "react-stepper-horizontal/lib/Stepper";

const UplaodingDocView = (props) => {
  const {steps, activeStep, onClickNext} = props
  

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

const buttonStyle = {
  background: "#E0E0E0",
  width: 200,
  padding: 16,
  textAlign: "center",
  margin: "0 auto",
  marginTop: 32,
};