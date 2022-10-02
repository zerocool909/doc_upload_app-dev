const CheckResults = ({ selectedInfo }) => {
  return (
    <div className="document-type-container">
      <div>
        <strong>Document Types : </strong> {selectedInfo.document_types}
      </div>
      <div>
        <strong>Data Points : </strong>
        {selectedInfo.data_points}
      </div>
      <div>
        <strong>Uploaded Document</strong>
        <ul>
          {selectedInfo.uploaded_file.map((files, index) => {
            return <li key={index}>{files.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CheckResults;
