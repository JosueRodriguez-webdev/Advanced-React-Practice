import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const checkValue = window.localStorage.getItem(key);
    return checkValue ? JSON.parse(checkValue) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    const finalValue = window.localStorage.setItem(key, JSON.stringify(value));
    return finalValue;
  };

  return [storedValue, setValue];
};
