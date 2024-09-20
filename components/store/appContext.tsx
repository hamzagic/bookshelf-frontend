'use client'
import { createContext, useContext, useState } from 'react';

const defaultValues = {
  isLoggedIn: false,
  token: ''
}
const UserContext = createContext<{
  isLoggedIn: boolean;
  token: string;
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
}>({
  ...defaultValues,
  user: null,
  setUser: () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  return (
    <UserContext.Provider value={{ ...defaultValues, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
}
