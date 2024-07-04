import { Field, Formik, Form } from "formik"
import { useId } from 'react'


const RegistrationForm = ({submit}) => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const handelSubmit = (values,actions) => {
        submit(values);
        actions.resetForm()
        
    }


    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handelSubmit}>
        <Form>
          <label htmlFor="nameId">Name:</label>
                <Field name="name" id={nameId} />
                <hr/>
          <label htmlFor="emailId">Email:</label>
                <Field name="email" id={emailId} />
                <hr/>
          <label htmlFor="passwordId">Password:</label>
                <Field name="password" id={passwordId} />
                <hr/>
        <button type="submit">Register</button>
        </Form>
      </Formik>
    );
}

export default RegistrationForm
