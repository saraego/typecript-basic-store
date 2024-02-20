import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Defina uma interface para as informações do usuário
interface UserData {
  id: number;
  name: string;
  email: string;
  // Adicione outros campos conforme necessário
}

// Defina uma interface para o contexto
interface UserContextType {
  userData: UserData | null;
  login: (data: UserData) => void;
  logout: () => void;
}

// Crie o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Crie o provedor do contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  // Função para fazer login
  const login = async (data: UserData) => {
  
    
    setUserData(data);
    await localStorage.setItem('loja:izabely',JSON.stringify(data))
  };

  useEffect(()=>{

    const showClientInfor = async () => {
        const client = await localStorage.getItem('loja:izabely')

        if(client){
            setUserData(JSON.parse(client))
        }
    }
    showClientInfor()

  },[])

  // Função para fazer logout
  const logout = async () => {
    await localStorage.removeItem('loja:izabely')
  };

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Criar o hook personalizado para acessar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser utilizado dentro de um UserProvider');
  }
  return context;
};
