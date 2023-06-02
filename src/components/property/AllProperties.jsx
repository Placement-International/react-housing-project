import React from 'react'
import { useState, useEffect} from 'react';
import { allProperties, searchPropertiesByLocation } from '../../utils/firebase/firebase.utils'
import PropertySearchBar from '../PropertySearchBar';

function AllProperties() {
  const [properties, setProperties] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    async function fetchProperties() {
      const propertiesData = await searchPropertiesByLocation(searchLocation)
      //const propertiesData = await allProperties();
      setProperties(propertiesData);
    }
    fetchProperties();
  }, [searchLocation]);

  const handleSearchLocation = (location) => {
    setSearchLocation(location);
    console.log(location);
  };

  return (
    <div>
      <PropertySearchBar onSearchLocation={handleSearchLocation}/>
      <h1>This are all the properties that we can find on the database</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <p>Author: {property.authorId}</p>
            <p>Title: {property.title}</p>
            <p>Location: {property.location}</p>
            <p>Description: {property.description}</p>
            <p>Price: {property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllProperties