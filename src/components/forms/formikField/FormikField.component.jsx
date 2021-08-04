import React from "react";
import { TextField, Select } from "formik-material-ui";
import { Field, ErrorMessage, Formik, Form } from "formik";
import PropTypes from "prop-types";
import FormikFieldCSS from "./formikField.styles";

const FormikField = ({ name, label, type = "text", required = "false" }) => {
  const formikFieldStyles = FormikFieldCSS();
  return (
    <div className={formikFieldStyles.FormikField}>
      <Field
        as={TextField}
        name={name}
        label={label}
        type={type}
        required={required}
        autoComplete="off"
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

FormikField.defaultProps = {
  type: "text",
  required: "false"
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default FormikField;
