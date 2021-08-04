import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("must be valid email"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "must be of length 8")
});

function PlainFormik() {
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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ dirty, isValid, handleReset }) => (
          <Form autoComplete="off">
            <div>
              <label htmlFor="email">Email:</label>
              <Field name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field name="password" />
              <ErrorMessage name="password" />
            </div>
            <button disabled={!dirty || !isValid} type="submit">
              Submit
            </button>
            <button onClick={handleReset} type="button">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PlainFormik;
