import "./style.css";
const DocumentTypes = ({ selectedInfo, setSelectedInfo }) => {
  const handleChange = (optionValue) => {
    const strSelectedValue = { ...selectedInfo };
    strSelectedValue.document_types = optionValue;
    setSelectedInfo(strSelectedValue);
  };
  return (
    <div className="document-type-container">
      <label className="document-type-container-title">
        What kind of Document is this?
      </label>
      <div className="check-box-section">
        <div className="form-check-container">
          <input
            type="radio"
            className="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
            onChange={() => handleChange("Rent Roll")}
          />
          <label className="form-check-label" htmlFor="radio1">
            Rent Roll
          </label>
        </div>
        <div className="form-check-container">
          <input
            type="radio"
            className="form-check-input"
            id="radio2"
            name="optradio"
            value="option2"
            onChange={() => handleChange("Property Deed")}
          />
          <label className="form-check-label" htmlFor="radio2">
            Property Deed
          </label>
        </div>
        <div className="form-check-container">
          <input
            type="radio"
            className="form-check-input"
            id="radio3"
            name="optradio"
            value="option3"
            onChange={() => handleChange("Closing Disclosure")}
          />
          <label className="form-check-label" htmlFor="radio3">
            Closing Disclosure
          </label>
        </div>
      </div>
    </div>
  );
};

export default DocumentTypes;
