import React, { createContext, useState } from "react";
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleColse = () => {
    setisOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setisOpen, handleColse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
