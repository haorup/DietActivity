import React, { createContext, useState } from 'react';

export const DataContext = createContext({ diet: [], activity: [] });

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({ diet: [], activity: [] });
  // add new diet data
  const addNewDiet = (newElement) => {
    setState((prevState) => ({
      diet: [...prevState.diet, newElement],
      activity: [...prevState.activity],
    }));
  };
  // add new activity data
  const addNewActivity = (newElement) => {
    setState((prevState) => ({
      activity: [...prevState.activity, newElement],
        diet: [...prevState.diet],
    }));
    };

  return (
    <DataContext.Provider value={{ state, addNewDiet, addNewActivity }}>
      {children}
    </DataContext.Provider>
  );
};
