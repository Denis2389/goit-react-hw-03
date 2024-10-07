import s from '../ContactForm/ContactForm.module.css'
import { Form, Field, Formik } from 'formik'

export default function ContactForm() {
  return (
    <div className={s.wrapper}>
        <Formik>
        <Form className={s.form}>
            <label className={s.label}>
                <span>Name</span>
                <Field className={s.field} name="username"/>
            </label>
            <label className={s.label}>
                <span>Email</span>
                <Field className={s.field} name="email"/>
            </label>
            <button>Add contact</button>
        </Form>
        </Formik>
    </div>
  )
}
