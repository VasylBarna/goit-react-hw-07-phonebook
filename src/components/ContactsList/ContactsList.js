import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/Phonebook/phonebook-selectors';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Phonebook/phonebook-operation';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';

export default function ContactsList() {
  const { data } = useFetchContactsQuery();
  const friends = useSelector(state => getContacts(data, state));
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={styles.list}>
      {friends &&
        friends.map(({ id, name, phone, createdAt }) => (
          <li key={id}>
            {name}: {phone}
            <br />
            {createdAt}
            <button
              className={styles.btn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    }),
  ),
};
