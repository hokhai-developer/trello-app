import React, { createContext, useState } from 'react';

export const ColumnContext = createContext();
const ColumnProvider = ({ children }) => {
  const [showAddNewCard, setShowAddNewCard] = useState(false);
  return (
    <ColumnContext.Provider
      value={{
        showAddNewCard,
        setShowAddNewCard,
      }}
    >
      {children}
    </ColumnContext.Provider>
  );
};
export default ColumnProvider;
