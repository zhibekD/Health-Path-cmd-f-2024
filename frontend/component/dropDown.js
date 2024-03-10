import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownPickerComponent = ({setSelectedValue, setplaceList}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Wheelchair', value: 'Wheelchair'},
    {label: 'Option2', value: 'Option2'},
  ]);

  const handleSearch = async () => {
    const placeList = [
      { latitude: 49.2623, longitude: -123.2454, name: 'Place 1' },
      { latitude: 49.263, longitude: -123.247, name: 'Place 2' },
    ];

    try {
      const response = await fetch(`http://10.19.129.145:5001/local-hospitals`);
      const json = await response.json();
      const realList = json.hospitals.map((hospital) => ({name: hospital[1], latitude: hospital[2], longitude: hospital[3], hours: hospital[6]}))
      console.log(realList)
      setSelectedValue(placeList);
      setplaceList(realList)
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    if (value === 'Wheelchair') {
      handleSearch();
    }
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

export default DropDownPickerComponent;
