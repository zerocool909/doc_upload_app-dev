import { useEffect } from "react";

const UploadDocument = ({ selectedInfo, setSelectedInfo }) => {
  useEffect(() => {
    console.log('selectedInfo', selectedInfo);;
  }, []);
  return(
     <div style={{background : 'red' }}>UploadDocument</div>);
};

export default UploadDocument;
