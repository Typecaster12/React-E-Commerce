import { NavLink } from "react-router-dom";
// Step 6: Import useSearch hook to access search context
import { useSearch } from "../Context/SearchContext";

// import './App.css';
const Navbar = () => {

  // Step 7: Get search context values and functions
  // This gives us access to current search query and function to update it
  const { searchQuery, updateSearchQuery } = useSearch();

  // Step 8: Handle search input changes
  // This function will be called every time user types in the search box
  const handleSearchChange = (event) => {
    const query = event.target.value;
    // Update the search query in context, which will trigger filtering in Home component
    updateSearchQuery(query);
  };

  return (
    <div className="nav-main-container">
        <div className="navbar">
            <div className="nav-logo"><NavLink to="/">Shop This</NavLink></div>

            <div className="nav-elements">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </div>

            <div className="nav-search">
                {/* Step 9: Connect search input to context */}
                {/* value prop ensures input shows current search query */}
                {/* onChange prop calls our handler function when user types */}
                <input 
                    type="text" 
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="nav-cart"><NavLink to="/cart">Cart</NavLink></div>
        </div>
    </div>
  )
}

export default Navbar;