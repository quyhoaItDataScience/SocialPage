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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserProvider;
