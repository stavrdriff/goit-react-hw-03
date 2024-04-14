import styles from './ContactForm.module.css';
import { useId } from "react";
import {Field, Form, Formik} from 'formik';
import Button from "../Button/Button.jsx";
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
    const nameID = useId();
    const numberID = useId();
    const phoneRegExp = /^((\\+[d/]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .matches(phoneRegExp, 'Phone number is incorrect')
            .min(6, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required')
    });

    return (
        <Formik
            initialValues={{
                id: '',
                name: '',
                number: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm}) => {
                values.id = nanoid(20);
                onSubmit(values);
                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <div className={styles.wrapper}>
                        <label htmlFor={nameID}>Name</label>
                        <Field className={styles.input} id={nameID} name="name" />
                        {errors.name && touched.name ? (
                            <p className={styles.error}>{errors.name}</p>
                        ) : null}
                    </div>
                    <div className={styles.wrapper}>
                        <label htmlFor={numberID}>Number</label>
                        <Field className={styles.input} id={numberID} name="number" />
                        {errors.number && touched.number ? (
                            <p className={styles.error}>{errors.number}</p>
                        ) : null}
                    </div>
                    <div className={styles.actions}>
                        <Button
                            onClick={onSubmit}
                            type="submit"
                            text={"Add contact"}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm;
