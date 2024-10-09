import s from '../ContactForm/ContactForm.module.css'

export default function SearchBox() {
  return (
    <div className={s.wrapper}> {
            <form className={s.form}>
                <label className={s.label}>
                    <span>Find contacts by name</span>
                    <input className={s.field} name="find"/>
                </label>
            </form>
    }

    </div>
  )
}
