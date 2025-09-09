import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../Api/ApiInstance";
// Step 10: Import useSearch hook to access search functionality
import { useSearch } from "../Context/SearchContext";
// Step 11: Import useMemo for performance optimization of filtering
import { useMemo } from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

const Home = () => {
  // Step 12: Get search query from context
  // This will automatically update when user types in navbar search
  const { searchQuery } = useSearch();

  //se we have to read data, we use useQuery;
  const { data, isError, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDetails,
    gcTime: 10000,
    staleTime: 5000
  });

  // Step 13: Create filtered products using useMemo for performance
  // This will only recalculate when data or searchQuery changes
  const filteredProducts = useMemo(() => {
    // If no data yet, return empty array
    if (!data) return []; //khtm;

    // If no search query, return all products
    if (!searchQuery || searchQuery.trim() === '') {
      return data;
    }

    // Filter products where title matches search query (case-insensitive)
    return data.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]); // Dependencies: recalculate when data or searchQuery changes

  if (isPending) return <div className="loading">Loading...</div>
  if (isError) return <div className="error">Some Error Occurred</div>

  // console.log('All products:', data);
  // console.log('Search query:', searchQuery);
  // console.log('Filtered products:', filteredProducts);


  //function to get product id;
  const getProductId = (id) => {
    console.log(id);
    return;
  }



  return (
    <div className="main-home-container">
      {/* Step 14: Show search results information */}
      {searchQuery && (
        <div className="search-results-info">
          <p>
            {filteredProducts.length > 0
              ? `Found ${filteredProducts.length} products for "${searchQuery}"`
              : `No products found for "${searchQuery}"`
            }
          </p>
        </div>
      )}

      <div className="products-grid">
        {/* Step 15: Render filtered products instead of all products */}
        {filteredProducts.length > 0 ? (
          // Map through filtered products instead of original data
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />


                <NavLink to={`/${product.id}`}>
                  <button className="add-to-cart-btn" onClick={() => getProductId(product.id)}>
                    Add to Cart
                  </button>
                </NavLink>


              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))
        ) : searchQuery ? (
          // Show message when no products match search query
          <div className="no-products-found">
            <h3>No products found</h3>
            <p>Try searching with different keywords</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Home;