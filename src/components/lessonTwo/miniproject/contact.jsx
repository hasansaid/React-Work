import React from "react";
import { Formik, Field, Form } from "formik";
const Contact = () => {
  return (
    <div>
      Contact
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          message: "",
          email: "",
        }}
        onSubmit={async (values, bag) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(values);
          bag.resetForm();
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <label style={{ margin: "5px" }} htmlFor="firstName">
              First Name:{" "}
            </label>
            <input
              disabled={isSubmitting}
              style={{ margin: "5px" }}
              id="firstName"
              name="firstName"
              // placeholder="Mehmet"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />

            <label style={{ margin: "5px" }} htmlFor="lastName">
              Last Name:{" "}
            </label>
            <input
              disabled={isSubmitting}
              style={{ margin: "5px" }}
              id="lastName"
              name="lastName"
              // placeholder="Çırpıcı"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />

            <label style={{ margin: "5px" }} htmlFor="message">
              Message:{" "}
            </label>
            <input
              disabled={isSubmitting}
              style={{ margin: "5px" }}
              id="message"
              name="message"
              // placeholder="Mesajınızı giriniz.."
              value={values.message}
              onChange={handleChange("message")}
            />

            <label style={{ margin: "5px" }} htmlFor="email">
              Email:{" "}
            </label>
            <input
              disabled={isSubmitting}
              style={{ margin: "5px" }}
              id="email"
              name="email"
              // placeholder="mc@acme.com"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            <button
              style={{ margin: "5px" }}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
    </div>
  );
};

export default Contact;
