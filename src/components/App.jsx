
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
