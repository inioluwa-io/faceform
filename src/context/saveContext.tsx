import React, { useState, createContext } from "react";

export const SaveContext = createContext({});

const SaveProvider = ({ children }: any) => {
  const [saveStatus, setSaveStatus] = useState(true);

  return (
    <SaveContext.Provider value={{ saveStatus, setSaveStatus }}>
      {children}
    </SaveContext.Provider>
  );
};
export default SaveProvider;
