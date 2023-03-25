import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContactsList, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';

const getFilteredContacts = (filterValue, contacts) => {
  return contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filterValue)
  );
};

export const ContactList = () => {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContactsList);

  const filteredContacts = getFilteredContacts(filterValue, contacts);
  return (
    <ul className={css.contact__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__list__item}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};
