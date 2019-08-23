import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo'
import { Form, Dropdown } from 'semantic-ui-react';


const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;



export const AddBook = graphql(getAuthorsQuery)
  (({ data }) => {
    const [fields, setFields] = useState({ name: {}, genre: {}, authorId: "" })
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
      setAuthors(data.authors);
    }, [data.authors])

    return (
      <Form id="add-book">
        <Form.Group>
          <Form.Field >
            <label>Book Title</label>
            <input type="text"></input>
          </Form.Field>
          <Form.Field >
            <label>Genre</label>
            <input type="text"></input>
          </Form.Field>
          <Form.Field >
            <label>Author</label>
            <Dropdown />
          </Form.Field>
        </Form.Group>


      </Form>
    )
  });

