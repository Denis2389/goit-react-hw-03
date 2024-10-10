import s from '../ContactForm/ContactForm.module.css'

export const SearchBox = () => {
  return (
    <div className={s.wrapper}> {
            <form className={s.form}>
                <label className={s.label}>
                    <span>Find contacts by name</span>
                    <input type='text' placeholder='Find...' className={s.field} name="find"/>
                </label>
            </form>
    }
    </div>
  )
}
