import styles from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ list, update }) => {
    return (
        <ul className={styles.contactList}>
            {list.map((item) =>
                <li className={styles.contactItem} key={item.id}>
                    <Contact
                        name={item.name}
                        number={item.number}
                        id={item.id}
                        remove={update}
                    />
                </li>
            )}
        </ul>
    )
}

export default ContactList;
