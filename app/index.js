import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import { Home } from './pages/Home';
import ContactsDetails from './pages/ContactsDetails';
import AddNewContact from './pages/AddNewContact';

const root = document.getElementById('root');

const App = (
  <Router>
    <Routes>
      <Route path="/contacts/add" component={AddNewContact} />
      <Route path="/contacts/:id" component={ContactsDetails} />{' '}
      <Route path="/contacts" component={Home} />
      <Route path="/" exact component={Home} />
    </Routes>
  </Router>
);

createRoot(root).render(App);
