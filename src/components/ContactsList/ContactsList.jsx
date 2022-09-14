import { nanoid } from 'nanoid';

export const ContactList = ({ states }) => {
  return (
    <ul>
      {states.map(state => {
        return <li key={nanoid(4)}>{state.name}</li>;
      })}{' '}
    </ul>
  );
};
