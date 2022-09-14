import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';
// import { nanoid } from 'nanoid';

// import { ContactList } from './ContactsList/ContactsList';

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
    // console.log(formValues);
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
    // console.log(this.formValues);
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
          state={this.state}
          newName={this.newName}
          // generateID={this.generateID}
          formValues={this.formValues}
          updateContacts={this.updateContacts}
        ></AddForm>

        <Section title="Contacts">
          {/* <ContactList states={this.state}></ContactList> */}
        </Section>
      </div>
    );
  }
}
