import { useState } from 'react';

/**
 * Custom hook that provides a way to get, set, and remove data from local storage.
 * 
 * @param {string} key - The key for the local storage item.
 * @param {any} initialValue - Initial value to be set if key does not exist in local storage.
 */
function useLocalStorage(key, initialValue) {
  // Get the item from local storage initially
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Set the new value to local storage
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove the value from local storage
  const removeStoredValue = () => {
    setValue(undefined);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useLocalStorage;