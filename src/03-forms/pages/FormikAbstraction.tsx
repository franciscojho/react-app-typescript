import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
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
                    terms: Yup.boolean().oneOf([true], 'Must accept the conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This options is not allowed')
                        .required('Required'),
                })}>
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="Francisco"
                        />
                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Huapaya"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            placeholder="franciscojho@hotmail.com"
                        />

                        <MySelect name="jobType" label="Job Type">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It Senior</option>
                            <option value="it-jr">It Junior</option>
                        </MySelect>

                        <MyCheckbox label="Terms & conditions" name="terms" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
