import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'
import { Dropdown } from 'semantic-ui-react';



const renderAuthorOptions = (authors) => authors ? authors.map(a => {
  return {
    key: a.id,
    text: a.name,
    value: a.id
  }
}) : null;

const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;


export const AuthorDropdown = graphql(getAuthorsQuery)
  (({ data, author, setAuthor }) => {
    const changeAuthor = (e, { value }) => setAuthor(value);


    const [authors, setAuthors] = useState([]);
    useEffect(() => {
      setAuthors(data.authors);
    }, [data.authors])

    return <Dropdown
      placeholder="Select author"
      selection
      value={author}
      options={renderAuthorOptions(authors)}
      onChange={changeAuthor}
    />
  });

