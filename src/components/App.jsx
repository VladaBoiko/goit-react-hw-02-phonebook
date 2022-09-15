import React, { Component } from 'react';
import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';

import { ContactList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formValues = {
    name: '',
    number: '',
    id: null,
  };
  updateContacts = values => {
    this.setState({
      contacts: this.state.contacts.concat(values),
    });
  };
  render() {
    // console.log(this.state.contacts);
    return (
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MainTitle></MainTitle>
        <AddForm
          initialValues={this.formValues}
          updateContacts={this.updateContacts}
        ></AddForm>

        <Section title="Contacts">
          {this.state.contacts.length >= 1 ? (
            <ContactList states={this.state.contacts}></ContactList>
          ) : (
            <p>No contacts yet =( </p>
          )}
        </Section>
      </div>
    );
  }
}
