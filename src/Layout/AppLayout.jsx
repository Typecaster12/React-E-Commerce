import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// Step 4: Import SearchProvider to wrap the layout
import { SearchProvider } from "../Context/SearchContext";
import { useState } from "react";

const AppLayout = () => {
    const [searchQ, setSearchQ] = useState('');
    return (
        // Step 5: Wrap the entire layout with SearchProvider
        // This makes search functionality available to all child components (Navbar, Home, etc.)
        <SearchProvider>
            <Navbar />
            <Outlet searchQ={searchQ} setSearchQ={setSearchQ}/>
            <Footer />
        </SearchProvider>
    )
}

export default AppLayout;