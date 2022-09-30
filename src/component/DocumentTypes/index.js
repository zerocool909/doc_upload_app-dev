import "./style.css";
const DocumentTypes = () => {
  
  const handleChange = (e) => {
    const { value, checked } = e.target;
    console.log('aa,', e.target);
  }
  return <div class="box-shadow">
     <label class="label-style" for="radio1">What kind of Document is this?</label>
     <div>
     <div class="form-check">
      <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onChange={handleChange} checked/>
      <label class="form-check-label" for="radio1">Rent Roll</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" checked/>
      <label class="form-check-label" for="radio1">Property Deed</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3" checked/>
      <label class="form-check-label" for="radio1">Closing Disclosure</label>
    </div>
    </div>
  </div>;
};

export default DocumentTypes;
