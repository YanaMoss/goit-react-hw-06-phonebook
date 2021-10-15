import AddContact from './components/AddContact/AddContact';
import { FindContact } from './components/Contacts/FindContact';
import { ContactList } from './components/Contacts/ContactList';

export default function App() {
  return (
    <>
      <AddContact />
      <FindContact title={'Find contact by name'} />
      <ContactList />
    </>
  );
}
