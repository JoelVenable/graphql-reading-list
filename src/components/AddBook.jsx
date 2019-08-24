import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo'
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { AuthorDropdown } from './AuthorDropdown';


export const AddBook = () => {
  const [name, setName] = useState();
  const changeName = ({ target: { value } }) => setName(value);

  const [genre, setGenre] = useState();
  const changeGenre = ({ target: { value } }) => setGenre(value);

  const [author, setAuthor] = useState();

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
          <AuthorDropdown
            author={author}
            setAuthor={setAuthor}
          />
        </Form.Field>
      </Form.Group>

      <Button type="submit">Send it!</Button>


    </Form>
  )
};

