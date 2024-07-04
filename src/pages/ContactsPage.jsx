import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm"
import SearchBox from '../components/SearchBox/SearchBox'
import ContactList from "../components/ContactList/ContactList"
import { addContact } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
 };
  
  return (
    <div>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage
