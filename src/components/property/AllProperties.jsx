import React from 'react'
import { useState, useEffect} from 'react';
import { allProperties } from '../../utils/firebase/firebase.utils'

function AllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const propertiesData = await allProperties();
      setProperties(propertiesData);
    }
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>This are all the properties that we can find on the database</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <p>Author: {property.authorId}</p>
            <p>Title: {property.title}</p>
            <p>Description: {property.description}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllProperties