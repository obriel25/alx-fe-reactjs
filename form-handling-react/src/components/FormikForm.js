
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function formikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Must be at least 6 characters"),
  });

  const onSubmit = (values, { resetForm }) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          alert("User registered successfully!");
          resetForm();
        }
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <div>
      <h2>Register (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
              />
              <ErrorMessage name="username" component="p" />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="p" />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="p" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default formikForm;