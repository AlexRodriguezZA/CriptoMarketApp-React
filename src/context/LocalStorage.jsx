import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

const LocalStorageProvider = ({ children }) => {
  const [history, setHistory] = useState(() => {
    const storedData = localStorage.getItem('HistorialItem');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('HistorialItem', JSON.stringify(history));
  }, [history]);

  const addToHistory = (newEntry) => {
    setHistory((prevHistory) => [...prevHistory, newEntry]);
  };
  const deleteHistory = () => {
    localStorage.clear()
  }

  const getHistory = () => {
    return history;
  };

  return (
    <LocalStorageContext.Provider value={{ addToHistory, getHistory, deleteHistory }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorage must be used within a LocalStorageProvider'
    );
  }
  return context;
};

export { LocalStorageProvider, useLocalStorage };
