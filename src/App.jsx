import AddContact from './components/AddContact/AddContact';
import { FindContact } from './components/Contacts/FindContact';
import { ContactList } from './components/Contacts/ContactList';
import { Section } from './components/Section/Section';
import { Container } from './components/App/App.styled';

export default function App() {
  return (
    <Container>
      <Section title={'Phonebook'}>
        <AddContact />
      </Section>
      <FindContact title={'Find contact by name'} />
      <ContactList />
    </Container>
  );
}
