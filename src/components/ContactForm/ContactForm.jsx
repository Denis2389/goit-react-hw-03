import s from './ContactForm.module.css'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'The name must contain at least 3 characters')
    .max(50, 'The name cannot exceed 50 characters')
    .required('Name is required'),
    number: Yup.string().required('Number is required')
  })

  return (
    <div className={s.wrapper}>
        <Formik
        validationSchema={validationSchema}
        >
        <Form className={s.form}>
            <label className={s.label}>
                <span>Name</span>
                <Field className={s.field} name="name"/>
            </label>
            <label className={s.label}>
                <span>Email</span>
                <Field className={s.field} name="number"/>
            </label>
            <button type='submit'>Add contact</button>
        </Form>
        </Formik>
    </div>
  )
}
