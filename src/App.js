import React from 'react';
import './App.css';
import { BookList } from './components/BookList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AddBook } from './components/AddBook';
import { Header } from 'semantic-ui-react';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ margin: '1rem' }}>
        <Header as="h1">Reading List</Header>
        <BookList />
        <AddBook />

      </div>


    </ApolloProvider>
  );
}

