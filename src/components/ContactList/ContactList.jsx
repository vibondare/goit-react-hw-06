import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.newContact.name
      .toLowerCase()
      .includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={css.container}>
      {visibleContacts &&
        visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
}
