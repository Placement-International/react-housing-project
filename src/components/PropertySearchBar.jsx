import React, {useState} from 'react';
import {default as locationSuggestions} from '../utils/data';


function PropertySearchBar() {
    const [searchProperty, setSearchProperty] = useState("");
    const [suggestions, setSuggestions] = useState("")

    //this function is called when the user types into the search bar
    //it recieves "event" which contains the value entered by the user
    //updates seatchProperty
    //calls setSuggestions function - this updates the suggestion list based on the current input value    
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchProperty(value);
        setSuggestions(getSuggestions(value));
    };

    //if the input length is greater than zero, it filters the locationSuggestions array based on the current input value
    //it uses the filter method to iterate over each location
    //
    const getSuggestions = (value, limit = 10) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        if (inputLength === 0) return [];
    
        const filteredSuggestions = locationSuggestions.filter(
              (location) =>
                location.toLowerCase().slice(0, inputLength) === inputValue
            );
    return filteredSuggestions.slice(0, limit);
        }
    
    const handleSuggestionClick = (suggestion) => {
        setSearchProperty(suggestion);
        setSuggestions([]);
      };

    const handleSubmit = () => {
        console.log("clicked")
    }
  return (
    <div className="relative">
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search properties"
        className="border border-gray-300 rounded-l py-2 px-4 w-full"
        value={searchProperty}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
      >
        Search
      </button>
    </form>
    {suggestions.length > 0 && (
      <ul className="absolute bg-white border border-gray-300 mt-2 w-full z-10">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            className="py-2 px-4 cursor-pointer hover:bg-gray-200"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default PropertySearchBar