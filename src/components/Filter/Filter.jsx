import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from '../../redux/filterSlice'
import css from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.value);

    const handleChangeFilter = (event) => {
        const value = event.target.value;
        dispatch(changeFilter(value));
      }

    return (
        <>
            <label htmlFor="filter">
                <p>Find contacts by name</p>
                <input type="text" className={css.input}name="filter" value={filter} onChange={handleChangeFilter}/>
            </label>
        </>
    )
}

export default Filter