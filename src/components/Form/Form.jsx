import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
// });
const generateID = () => {
  return nanoid(4);
};
export const AddForm = ({ state, newName, formValues, updateContacts }) => {
  //   const initialValues = {
  //     ...state,
  //     id: null,
  //   };
  const addStateValues = values => {
    // console.log(state);
    // console.log(stateValues.id);
    // console.log(initialValues.id);
    // console.log(values);
    formValues.id = values.id;
    formValues.name = values.name;
  };
  const handleSubmit = (values, { resetForm }) => {
    values.id = generateID();
    newName(values);
    addStateValues(values);
    resetForm();
    updateContacts(values);
  };

  return (
    <Formik
      initialValues={formValues}
      //   validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
