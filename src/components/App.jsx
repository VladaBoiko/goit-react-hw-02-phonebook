import React, { Component } from 'react';
import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';

import { ContactList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formValues = {
    name: '',
    id: null,
  };
  updateContacts = formValues => {
    this.setState({
      contacts: this.state.contacts.concat(formValues),
    });
  };
  newName = formValues => {
    this.setState({
      name: formValues.name,
    });
  };
  render() {
    console.log(this.state);
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
          newName={this.newName}
          state={this.formValues}
          updateContacts={this.updateContacts}
        ></AddForm>

        <Section title="Contacts">
          <ContactList states={this.state.contacts}></ContactList>
        </Section>
      </div>
    );
  }
}
