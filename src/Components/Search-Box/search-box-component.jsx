import React from 'react';
import './search-box-style.css';

export const Search = ({placeholder,handle }) => (
    <input type='search' 
            className='search'
          placeholder={placeholder} 
          onChange={handle} />
);