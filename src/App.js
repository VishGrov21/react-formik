import React, { useState } from "react";
import FormikField from "./components/forms/formikField/FormikField.component";
import { Formik } from "formik";
import * as Yup from "yup";
import FileUploadButton from "./components/forms/fileUploadButton/FileUploadButton.element";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("must be valid email"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "must be of length 8")
});

function App() {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });
  const initialValues = {
    email: "",
    password: ""
  };
  const handleSubmit = values => {
    console.log(values.email);
    console.log(values.password);
  };
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        <Form>
          <FormikField name="email" label="Email" required />
        </Form>
      </Formik>
      <FileUploadButton label={"Upload List"} style={{ color: "#ff7890" }} />
    </div>
  );
}

export default App;
