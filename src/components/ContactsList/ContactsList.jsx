import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ states, removeContact }) => {
  return (
    <List>
      {states.map(state => {
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number={state.number}
            removeContact={removeContact}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );
};

ContactList.propTypes = {
  states: PropTypes.array({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    contacts: PropTypes.shape({
      name: PropTypes.string.isRequared,
      id: PropTypes.string.isRequared,
      number: PropTypes.string.isRequared,
    }),
  }),
  removeContact: PropTypes.func.isRequired,
};
