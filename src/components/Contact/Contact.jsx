import styles from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button.jsx";

const Contact = ({name, number, id, remove}) => {
    return (
        <div className={styles.contact} id={id}>
            <div className={styles.wrapper}>
                <p className={styles.row}>
                    <span className={styles.rowSpan}><FaPhoneAlt /></span>
                    { name }
                </p>
                <p className={styles.row}>
                    <span className={styles.rowSpan}><FaUser /></span>
                    { number }
                </p>
            </div>
            <div className="actions">
                <Button onClick={remove} id={id} />
            </div>
        </div>
    )
}

export default Contact;
