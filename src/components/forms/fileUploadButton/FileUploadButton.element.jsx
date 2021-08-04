import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const FileUploadButton = ({
  name = "fileUploadBtn",
  label = "Upload File",
  ...props
}) => {
  const [file, setFile] = useState(null);
  const fileRef = useRef();

  const fileSelectHandler = event => {
    console.log(event.target.files[0]);
    // setFile(event.target.files[0]);
  };

  return (
    <React.Fragment>
      <input
        ref={fileRef}
        type="file"
        onChange={fileSelectHandler}
        style={{ display: "none" }}
      />
      <button onClick={() => fileRef.current.click()} {...props}>
        {label}
      </button>
    </React.Fragment>
  );
};

FileUploadButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default FileUploadButton;
