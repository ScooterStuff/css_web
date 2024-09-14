'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../src/styles/Shop.module.css';
import funny from '../../public/image/waterbottle.png';
import funny2 from '../../public/image/jacket.png';
import BackDrop from '@/components/BackDrop';
// import { loadStripe } from '@stripe/stripe-js';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export default function Shop() {
    // Define state for cart items, total price, and cart visibility
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
    const [isCartOpen, setIsCartOpen] = useState(false); // New state to handle cart visibility

    // Define product catalog
    const products: Product[] = [
        { id: 1, name: 'Water Bottle', price: 50, image: funny.src },
        { id: 2, name: 'Soft Shell Jacket', price: 30, image: funny2.src },
        { id: 3, name: 'Sticker', price: 10, image: funny.src },
        { id: 4, name: 'Sticker', price: 10, image: funny2.src },
        { id: 5, name: 'Sticker', price: 10, image: funny.src },
        { id: 6, name: 'Sticker', price: 10, image: funny2.src },
        { id: 7, name: 'Sticker', price: 10, image: funny.src },
    ];

    // Function to update the quantity of an item in the cart
    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Function to remove item from cart
    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Function to calculate total price
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    // Function to toggle cart visibility
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Function to add an item to the cart
    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            // Check if item is already in the cart
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                // If it exists, increase the quantity
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If it doesn't exist, add it to the cart
                return [
                    ...prevItems,
                    { ...product, quantity: 1 }, // Add the product with a quantity of 1
                ];
            }
        });
    };

    // const handleCheckout = async () => {
    //     const stripe = await stripePromise;

    //     const response = await fetch('/api/checkout', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ cartItems }),
    //     });

    //     const session = await response.json();

    //     // Redirect the user to the Stripe checkout page
    //     const result = await stripe?.redirectToCheckout({ sessionId: session.id });

    //     if (result?.error) {
    //         console.error(result.error.message);
    //     }
    // };

    return (
        <div>
            <BackDrop/>
            <div className={styles.navcontainer}>
                {/* Basket button to toggle cart visibility */}
                <button className={styles.basketButton} onClick={toggleCart}>
                    <i className="bx bx-shopping-bag"></i> Basket ({cartItems.length})
                </button>

                {/* Cart Section */}
                <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
                    <h2 className={styles.cartTitle}>Your Cart</h2>
                    <div className={styles.cartContent}>
                        {cartItems.map((item) => (
                            <div className={styles.cartBox} key={item.id}>
                                <Image
                                    src={item.image}
                                    alt='cartImage'
                                    className={styles.cartImage}
                                    width={100}
                                    height={100}
                                />
                                <div className={styles.detailBox}>
                                    <div className={styles.cartProductTitle}>{item.name}</div>
                                    <div className={styles.cartPrice}>${item.price}</div>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min={1}
                                        className={styles.cartQuantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                    {/* Remove Button */}
                                    <button 
                                        className={styles.removeButton} 
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalTitle}>Total</div>
                        <div className={styles.totalPrice}>${totalPrice}</div>
                    </div>
                    <button type="button" className={styles.btnBuy}>
                        Pay Now
                    </button>
                    {/* Close Button */}
                    <i className={styles.btnClose} onClick={toggleCart}>
                        X
                    </i>
                </div>
            </div>
            {/* Product Catalogue Section */}
            <section className={styles.shopContainer}>
                <h2 className={styles.sectionTitle}>Shop Products</h2>
                <div className={styles.shopContent}>
                    {products.map((product) => (
                        <div className={styles.productBox} key={product.id}>
                            <Image
                                src={product.image}
                                alt='cartImage'
                                className={styles.productImage}
                                width={200}
                                height={200}
                            />
                            <h2 className={styles.productTitle}>{product.name}</h2>
                            <span className={styles.productPrice}>${product.price}</span>
                            <button className={styles.addCart} onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
