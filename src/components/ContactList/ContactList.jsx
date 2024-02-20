import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.value);

    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={css.list}>
                        <span className={css.name}>{contact.name}:</span>
                        <span className={css.number}>{contact.number}</span>
                        <button className={css.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                    </li>
                );
            })}
        </ul>
    );
    
}

export default ContactList