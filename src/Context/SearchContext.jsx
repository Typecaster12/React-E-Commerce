import { createContext, useContext, useState } from 'react';

// Step 1: Create Search Context
// This context will manage the search query state and make it available to all components
const SearchContext = createContext();

// Step 2: Create Search Provider Component
// This provider will wrap our app and provide search functionality to all child components
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
      {children}
    </SearchContext.Provider>
  );
};

// Step 3: Custom hook to use Search Context
// This hook provides easy access to search context in any component
export const useSearch = () => {
  const context = useContext(SearchContext);
  
  // Error handling: ensure hook is used within SearchProvider
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  
  return context;
};

export default SearchContext;
