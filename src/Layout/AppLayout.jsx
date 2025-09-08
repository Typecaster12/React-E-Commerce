import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// Step 4: Import SearchProvider to wrap the layout
import { SearchProvider } from "../Context/SearchContext";

const AppLayout = () => {
    return (
        // Step 5: Wrap the entire layout with SearchProvider
        // This makes search functionality available to all child components (Navbar, Home, etc.)
        <SearchProvider>
            <div className="app-layout">
                <Navbar />
                <main className="main-content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SearchProvider>
    )
}

export default AppLayout;