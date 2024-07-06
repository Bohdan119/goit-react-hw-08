import { Field, Formik, Form } from "formik";
import { useId } from "react";
import PropTypes from 'prop-types'

const LoginForm = ({ handelSubmit } ) => {
  const passwordId = useId();
  const emailId = useId();

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handelSubmit}>
      <Form>
        <label htmlFor="emailId">Email:</label>
        <Field name="email" id={emailId} />
        <hr />
        <label htmlFor="nameId">Password:</label>
        <Field name="password" id={passwordId} type="password" />
        <hr />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  handelSubmit: PropTypes.func.isRequired,
}



export default LoginForm;
