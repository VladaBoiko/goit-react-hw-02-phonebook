import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});
// const schema = yup.object({
//   name: yup
//     .string()
//     .label('Full Name')
//     .required()
//     .test(
//       'is-full-name',
//       'Please enter both your first and last name',
//       function (value) {
//         const nameArr = value.split(' ');
//         return nameArr.length >= 2;
//       }
//     ),
// });
const generateID = () => {
  return nanoid(4);
};
export const AddForm = ({ initialValues, updateContacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    updateContacts(values);
    values.id = generateID();
    // console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </label>
        <label htmlFor="number">
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
