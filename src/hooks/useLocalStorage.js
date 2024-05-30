import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
  // Server Side React aka Next.js
  if (typeof window === "undefined") return initValue;

  // if a value is already stored
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  // return the result of a function
  if (initValue instanceof Function) return initValue;

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
