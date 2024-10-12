import s from './ContactForm.module.css'
import { Form, Field, Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'
/* eslint-disable react/prop-types */

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, 'The name must contain at least 3 characters')
  .max(50, 'The name cannot exceed 50 characters')
  .required('Name is required'),
  number: Yup.string().required('Number is required')
})

function ContactForm({ onSubmit }) {
  return (
    <div className={s.wrapper}>
        <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit({ id: nanoid(), ...values });
          resetForm();
        }}
        >
        <Form className={s.form}>
            <label className={s.label}>
                <span>Name</span>
                <Field className={s.field} name="name"/>
                <ErrorMessage name='name' />
            </label>
            <label className={s.label}>
                <span>Number</span>
                <Field className={s.field} name="number"/>
                <ErrorMessage name='number' />
            </label>
            <button type='submit'>Add contact</button>
        </Form>
        </Formik>
    </div>
  )
}

export default ContactForm