import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const MySearchBar = () => {
    const [search, setSearch] = useState('');
  
    const updateSearch = (search) => {
      setSearch(search);
    };
  
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
        style = {{ width: '90%'}}
      />
    );
  };

export default MySearchBar;
