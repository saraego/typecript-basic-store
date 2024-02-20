

import { UserProvider } from "./UserContext";


export const AppProvider = ({ children }:any) => (
  <UserProvider>
   {children}
  </UserProvider>
);


