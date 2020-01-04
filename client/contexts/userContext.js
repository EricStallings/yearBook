import React from 'react';

const UserContext = React.createContext({
  username: '',
  pictures: [],
  addUserInfo: () => {},
  // addPicture: () => {},
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
