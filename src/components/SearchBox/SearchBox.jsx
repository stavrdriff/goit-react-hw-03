import styles from './SearchBox.module.css';
import {useId} from "react";

const SearchBox = ({value, onChange}) => {
    const searchID = useId();
    return (
        <div className={styles.search}>
            <label
                className={styles.label}
                htmlFor={searchID}
            >Find contacts by name</label>
            <input
                className={styles.input}
                type={"text"}
                id={searchID}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBox;
