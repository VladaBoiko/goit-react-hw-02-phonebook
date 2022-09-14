export const ContactList = ({ states }) => {
  return (
    <ul>
      {states.map(state => {
        return <li key={state.id}>{state.name}</li>;
      })}{' '}
    </ul>
  );
};
