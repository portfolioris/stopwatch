import { writable } from 'svelte/store';

const getLocalUsers = () => {
  const localUsers = localStorage.getItem('users');
  if (localUsers) {
    return JSON.parse(localUsers);
  }

  return [];
};

const getActiveUser = () => {
  const localActiveUser = localStorage.getItem('activeUser');
  return localActiveUser || null;
};

export const usersStore = writable(getLocalUsers());

usersStore.subscribe((value) => {
  localStorage.setItem('users', JSON.stringify(value));
});

export const activeUserNameStore = writable(getActiveUser());

activeUserNameStore.subscribe((value) => {
  localStorage.setItem('activeUser', value);
});
