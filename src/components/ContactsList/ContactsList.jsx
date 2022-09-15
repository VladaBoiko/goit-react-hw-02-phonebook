export const ContactList = ({ states }) => {
  return (
    <ul>
      {states.map(state => {
        console.log(state);
        return (
          <li key={state.id}>
            <span>{state.name}</span>
            <span>{state.number}</span>
          </li>
        );
      })}{' '}
    </ul>
  );
};
