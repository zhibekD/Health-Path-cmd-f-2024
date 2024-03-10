import React, { useState, useEffect, useMemo } from "react";
import { Searchbar } from "react-native-paper";


const MySearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const filteredResults = useMemo(() => {
    return searchResults.filter(result => result)// Once the hospitals become objects with keys we can filter them
  }, [search, searchResults]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://10.19.129.145:5001/local-hospitals");
        const json = await response.json();
        setSearchResults(json.hospitals)
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <Searchbar
      placeholder={search}
      onChangeText={updateSearch}
      value={search}
      style={{ width: "90%", backgroundColor: "white" }}
    />
  );
};

export default MySearchBar;
