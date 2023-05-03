import React from 'react'
import { useState, useEffect} from 'react';
import { testingDoc } from '../../utils/firebase/firebase.utils'

function AllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const propertiesData = await testingDoc();
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
            <p>{property.title}</p>
            <p>{property.description}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllProperties