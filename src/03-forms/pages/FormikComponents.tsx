import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must 15 characters at least')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must 15 characters at least')
                        .required('Required'),
                    email: Yup.string()
                        .email('The format is incorrect')
                        .required('Required'),
                })}>
                {(formik) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastname">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
