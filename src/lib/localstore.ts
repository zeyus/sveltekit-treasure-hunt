import { writable } from "svelte/store";

export const localStore = (key: string, initial: string | boolean | number) => {
  // receives the key of the local storage and an initial value

  const toString = (value: string | boolean | number) => JSON.stringify(value, null, 2); // helper function
  const toObj = JSON.parse; // helper function

  let item = localStorage.getItem(key); // get item from local storage
  if (item === null) {
    // item not present in local storage
    item = toString(initial); // initialize local storage with initial value    
    localStorage.setItem(key, item); // initialize local storage with initial value
  }

  const saved = toObj(item); // convert to object

  const { subscribe, set, update } = writable(saved); // create the underlying writable store

  return {
    subscribe,
    set: (value: string | boolean | number) => {
      localStorage.setItem(key, toString(value)); // save also to local storage as a string
      return set(value);
    },
    update,
  };
};