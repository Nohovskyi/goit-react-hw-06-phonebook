import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from '././App.module.css';

export const App = () => {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
