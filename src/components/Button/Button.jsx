import styles from './Button.module.css';

const Button = ({ text = "Delete", onClick, id  }) => {
    return (
        <button className={styles.button} onClick={ () => onClick(id) }>{ text }</button>
    )
}

export default Button;
