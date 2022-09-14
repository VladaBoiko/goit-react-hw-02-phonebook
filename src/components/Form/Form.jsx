import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
// });
const schema = yup.object({
  name: yup
    .string()
    .label('Full Name')
    .required()
    .test(
      'is-full-name',
      'Please enter both your first and last name',
      function (value) {
        const nameArr = value.split(' ');
        return nameArr.length >= 2;
      }
    ),
});
const generateID = () => {
  return nanoid(4);
};
export const AddForm = ({ state, newName, updateContacts }) => {
  const addStateValues = values => {
    state.id = values.id;
    state.name = values.name;
  };
  const handleSubmit = (values, { resetForm }) => {
    values.id = generateID();
    newName(values);
    updateContacts(values);

    addStateValues(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={state}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
