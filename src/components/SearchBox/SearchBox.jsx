import s from '../SearchBox/SearchBox.module.css'

/* eslint-disable react/prop-types */

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
    <label className={s.label}>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
        className={s.field}
      />
    </label>
    </div>
  );
}

export default SearchBox