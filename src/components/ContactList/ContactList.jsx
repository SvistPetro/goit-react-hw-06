import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {

    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={css.list}>
                        <span className={css.name}>{contact.name}:</span>
                        <span className={css.number}>{contact.number}</span>
                        <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
                    </li>
                );
            })}
        </ul>
    );
    
}

export default ContactList