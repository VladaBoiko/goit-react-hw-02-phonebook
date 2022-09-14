import React, { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
export default class AddForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  initialValues = {
    ...this.state,
    id: null,
  };
  newName = values => {
    this.setState({
      name: values.name,
    });
  };
  generateID = () => {
    return nanoid(4);
  };

  handleSubmit = (values, { resetForm }) => {
    values.id = this.generateID();
    this.newName(values);
    // console.log(values);
    resetForm();
  };
  render() {
    // const current = this.state;
    // console.log(current);
    return (
      <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
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
  }
}
