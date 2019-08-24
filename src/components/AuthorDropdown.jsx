import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo'
import { Dropdown } from 'semantic-ui-react';
import { getAuthorsQuery } from '../queries/queries';


const renderAuthorOptions = (authors) => authors ? authors.map(a => {
  return {
    key: a.id,
    text: a.name,
    value: a.id
  }
}) : null;




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

