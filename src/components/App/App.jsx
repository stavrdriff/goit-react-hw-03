import './App.css';
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {useEffect, useState} from "react";

const App = () => {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) || [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]}
    );

    useEffect(() => {
        window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const [filter, setFilter] = useState('');
    const filteredContacts = contacts.filter(
        ({name}) => name.toLowerCase().includes(filter.toLowerCase()));

    const deleteContact = (idItem) => {
        setContacts(
            contacts.filter(({id}) => id !== idItem)
        )
    }

    const addContact = (contact) => {
        if (contact) {
            setContacts((prevContacts) => {
                return [...contacts, contact];
            });
        }
    }

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact}/>
            <SearchBox value={filter} onChange={setFilter}/>
            <ContactList list={filteredContacts} update={deleteContact}/>
        </>
    )
}

export default App
