// src/components/Filter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../features/contactsSlice';

function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(updateFilter(e.target.value))}
      placeholder="Filter contacts"
    />
  );
}

export default Filter;
