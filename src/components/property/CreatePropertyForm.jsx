import React, { useState } from 'react';
import { db } from '../../utils/firebase/firebase.utils';
import {doc, setDoc } from 'firebase/firestore';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

const CreatePropertyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const { currentUser } = useContext(UserContext);

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "properties", title), {
        authorId: currentUser.uid,
        title: title,
        description: description,
        price: price
    });
    setTitle('');
    setDescription('');
    setPrice('');
    // inform the user that the post has been a success
  };

  return (
    <form onSubmit={handlePropertySubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePropertyForm;
