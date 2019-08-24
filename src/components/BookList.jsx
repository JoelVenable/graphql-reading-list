import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo'



const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`;


const DisplayBooks = ({ data }) => {
  if (data.loading) return <li>Data is loading...</li>;
  else return data.books ? data.books.map(b => <li>{b.name}</li>) : null;


}

export const BookList = graphql(getBooksQuery)
  (({ data }) => {



    return (
      <ul id="book-list">
        <DisplayBooks data={data} />
      </ul>
    )
  });


