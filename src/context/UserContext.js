import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const userDefault = {
  username: "",
  email: "",
  fullname: "",
  phone: "",
  hobby_id: "",
  location_id: "",
};

function UserProvider({ children }) {
  const [user, setUser] = useState(userDefault);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
