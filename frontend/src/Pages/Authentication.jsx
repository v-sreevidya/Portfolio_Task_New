import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    return authStatus === "true";
  });
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
