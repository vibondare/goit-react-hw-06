import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContactsList from "./contactsList.json";
import { useSelector } from "react-redux";

function App() {
  const hello = useSelector((state) => state.filters.name)
  const [searchValue, setSearchValue] = useState("");
  const [contactsList, setContactsList] = useState(() => {
    const savedContactsList = window.localStorage.getItem(
      "saved-contacts-list"
    );
    if (savedContactsList !== null) {
      return JSON.parse(savedContactsList);
    }

    return initialContactsList;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-contacts-list",
      JSON.stringify(contactsList)
    );
  }, [contactsList]);

  const filteredContacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContactsList((prevContactsList) => {
      return [...prevContactsList, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContactsList((prevContactsList) => {
      return prevContactsList.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <h1>{hello}</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={searchValue} onSearch={setSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
