import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";

const App = () => {
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
        </>
    )
}

export default App
