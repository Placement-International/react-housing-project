import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';

const CreatePropertyForm = () => {
  
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rentingType, setRentingType] = useState('room');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { currentUser } = useContext(UserContext);

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await setDoc(doc(db, "properties", title), {
        authorId: currentUser.uid,
        rentingType: rentingType,
        title: title,
        description: description,
        price: price,
      });
      setTitle('');
      setDescription('');
      setPrice('');
      setRentingType('room');
      setTitle('');
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting property', error);
      setIsSubmitting(false);
    }
    // inform the user that the post has been a success
  };

  const renderSubmitMessage = () => {
    if (submitSuccess) {
      return (
        <div>
          <p>Ok, your post is under review now.</p>
          <button onClick={routeChange}>Go back to homepage</button>
        </div>
      );
    } else if (isSubmitting) {
      return <p>Submitting property...</p>;
    } else {
      return null;
    }
  };


  return (
    <>
    <form onSubmit={handlePropertySubmit}>
      <p> Is it a room or an apartment? </p>
      <select name="rentingType" value={rentingType} onChange={(e) => setRentingType(e.target.value)}>
        <option value="room">Room</option>
        <option value="apartment">Apartment</option>
      </select>
      {/* Add Location
      Add Floor */}
      
{/* Building Characteristics */}

      <label >
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
    {renderSubmitMessage()}
    </>
  );
};

export default CreatePropertyForm;
