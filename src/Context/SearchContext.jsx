/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

// Step 1: Create Search Context
// This context will manage the search query state and make it available to all components
const SearchContext = createContext(); //creating the context;

// Step 2: Create Search Provider Component
// This provider will wrap our app and provide search functionality to all child components

//the components which get wrapped by this component will able to access the functionality defined inside SearchPovide
export const SearchProvider = ({ children }) => {
  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update search query
  // This will be called from the Navbar component when user types in search input
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // Function to clear search query
  // Useful for reset functionality
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Context value object containing state and functions
  const contextValue = {
    searchQuery,           // Current search query string
    updateSearchQuery,     // Function to update search query
    clearSearch           // Function to clear search query
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}  {/* components are consider as children here */}
    </SearchContext.Provider>
  );
};

// Step 3: Custom hook to use Search Context
// This hook provides easy access to search context in any component
export const useSearch = () => {
  const context = useContext(SearchContext); //willprovide under searchcontext to use every child which is wrapped by provider

  // Error handling: ensure hook is used within SearchProvider
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};

export default SearchContext;
