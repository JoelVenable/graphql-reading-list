import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo'
import { Form, Dropdown, Button } from 'semantic-ui-react';


const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;


const authorOptions = (authors) => authors ? authors.map(a => {
  return {
    key: a.id,
    text: a.name,
    value: a.id
  }
}) : null;


export const AddBook = graphql(getAuthorsQuery)
  (({ data }) => {
    const [name, setName] = useState();
    const changeName = ({ target: { value } }) => setName(value);

    const [genre, setGenre] = useState();
    const changeGenre = ({ target: { value } }) => setGenre(value);

    const [author, setAuthor] = useState();
    const changeAuthor = (e, { value }) => setAuthor(value);


    const [authors, setAuthors] = useState([]);
    useEffect(() => {
      setAuthors(data.authors);
    }, [data.authors])

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
    }

    return (
      <Form id="add-book" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field >
            <label>Book Title</label>
            <input type="text" onChange={changeName}></input>
          </Form.Field>
          <Form.Field >
            <label>Genre</label>
            <input type="text" onChange={changeGenre}></input>
          </Form.Field>
          <Form.Field >
            <label>Author</label>
            <Dropdown
              placeholder="Select author"
              selection
              options={authorOptions(authors)}
              onChange={changeAuthor}
            />
          </Form.Field>
        </Form.Group>

        <Button type="submit">Send it!</Button>


      </Form>
    )
  });

