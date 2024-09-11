"use client";
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { useState } from 'react';
import logo from '../../public/image/logo.svg'
import Image from 'next/image'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link href='/'>
                    <div className={styles.logoLink}>
                        <Image src={logo} alt='logo' className={styles.logoImage}/>
                        <span className={styles.logoText}>Computer Science Society</span>
                    </div>
                </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                {/* Hamburger icon */}
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                <li>
                    <Link href="/" onClick={toggleMenu}><span>Home</span></Link>
                </li>
                <li>
                    <Link href="/about" onClick={toggleMenu}>About</Link>
                </li>
                <li>
                    <Link href="/shop" onClick={toggleMenu}>Shop</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;