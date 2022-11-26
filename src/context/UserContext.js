import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const userDefault = {
  id: "",
  name: "",
  email: "",
  location: "",
  company: "",
  studentCode: "",
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
