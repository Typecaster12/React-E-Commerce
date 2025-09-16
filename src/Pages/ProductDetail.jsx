import { useQuery } from "@tanstack/react-query";
import { getIndvProduct } from "../Api/ApiInstance";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import './ProductDetail.css';
import { useState } from "react";
import { useCart } from "../Context/CartContext";

const ProductDetail = () => {
    //addtocart function form context(global state);
    const { addProductsToCart } = useCart();


    //state for the quantity indicator;
    //this state is going to be shared in add to cart
    //the product we click is also goin to be shared;
    //the product's id will also be shared;
    const [productNo, setProductNo] = useState(1); //by default one, as we click on the add to cart button,

    //to get the id;
    const { id } = useParams();
    // console.log(`use param's value : ${id}`);
    const navigate = useNavigate();

    const { data, isPending, isError } = useQuery({
        queryKey: ['IndvProduct', id],
        queryFn: () => getIndvProduct(id),
        gcTime: 10000,
        staleTime: 5000,
        enabled: !!id, // runs if id exists...
    });

    // Handle navigation back to products
    const handleBackToProducts = () => {
        navigate('/');
    };

    // Handle add to cart (placeholder function)
    const handleAddToCart = () => {
        addProductsToCart({
            img:data.image,
            id: data.id,
            name: data.title,
            price: (productNo * data.price),
            quantity: productNo //state, we created
        })
        alert(`Added ${data.title} to cart!`);
    };

    if (isError) return (
        <div className="error-container">
            <h2>Oops! Something went wrong</h2>
            <p>Unable to load product details. Please try again.</p>
            <button className="back-btn" onClick={handleBackToProducts}>
                ← Back to Products
            </button>
        </div>
    );

    if (isPending) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading product details...</p>
        </div>
    );

    // console.log(data);

    return (
        <div className="product-detail-container">
            {/* Back to Products Button */}
            <button className="back-to-products-btn" onClick={handleBackToProducts}>
                ← Back to Products
            </button>

            <div className="product-detail-content">
                {/* Product Image Section */}
                <div className="product-image-section">
                    <div className="product-image-wrapper">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="product-detail-image"
                        />
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="product-info-section">
                    <div className="product-header">
                        <span className="product-category">{data.category}</span>
                        <h1 className="product-detail-title">{data.title}</h1>
                    </div>

                    <div className="product-rating">
                        <div className="rating-stars">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`star ${index < Math.floor(data.rating?.rate || 0) ? 'filled' : ''}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <span className="rating-text">
                            {data.rating?.rate || 'N/A'} ({data.rating?.count || 0} reviews)
                        </span>
                    </div>

                    <div className="product-price-section">

                        <span className="product-detail-price">${productNo * data.price}</span>
                        {/* <span className="product-detail-price">${data.price}</span> */}
                        <span className="price-label">Free shipping available</span>
                    </div>

                    <div className="product-description">
                        <h3>Product Description</h3>
                        <p>{data.description}</p>
                    </div>

                    {/* the quantity indicator, to ensure the number of product you want to but  */}
                    <div className="quantity-box">
                        <div className="quantity-indicator">
                            {productNo === 1 ? <button className="neg-dis">-</button> : <button className="neg" onClick={() => setProductNo(productNo - 1)}>-</button>}
                            <span className="quantity-screen">{productNo}</span>
                            <button className="pos" onClick={() => setProductNo(productNo + 1)}>+</button>
                        </div>
                    </div>


                    <div className="product-actions">
                        {/* onclicking we will redirected to the cart option, with perticular product and its details and also its info... */}
                        <NavLink to='/cart' className="add-to-cart-btn-detail">
                            <button onClick={handleAddToCart}>
                                🛒 Add to Cart
                            </button>
                        </NavLink>
                    </div>

                    <div className="product-features">
                        <div className="feature">
                            <span className="feature-icon">🚚</span>
                            <div className="feature-text">
                                <strong>Free Delivery</strong>
                                <p>On orders over $50</p>
                            </div>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🔄</span>
                            <div className="feature-text">
                                <strong>Easy Returns</strong>
                                <p>30-day return policy</p>
                            </div>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🔒</span>
                            <div className="feature-text">
                                <strong>Secure Payment</strong>
                                <p>100% secure checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;