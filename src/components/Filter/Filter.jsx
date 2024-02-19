import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {

    return (
        <>
            <label htmlFor="filter">
                <p>Find contacts by name</p>
                <input type="text" className={css.input}name="filter" value={value} onChange={onChange}/>
            </label>
        </>
    )
}

export default Filter