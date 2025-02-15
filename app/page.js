'use client'

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import SliderBar from './components/SliderBar';

export default function Home() {
  // State to track if the mobile nav is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle nav
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Carpet & Flooring Store</title>
        <meta name="description" content="Best Carpet and Flooring Products" />
      </Head>

      {/* ============== NAVIGATION ============== */}
      <nav className={styles.navbar}>
        {/* Logo / Brand */}
        <div className={styles.logo}>
          contact@carpettrust.com
        </div>

        {/* Hamburger button (visible on mobile) */}
        <button className={styles.hamburger} onClick={handleNavToggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Menu Items */}
        <ul
          className={`${styles.navLinks} ${isNavOpen ? styles.navActive : ''}`}
        >
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#previous-works">Projects</a></li>
          <li><a href="#sale">Sale</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </nav>

      <SliderBar />

      {/* ============== HEADER ============== */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to</h1>
        <Image 
          className={styles.imageTop}
          src={'/TRUST_SMALL.jpg'} 
          width={500} 
          height={110} 
          quality={100} 
          alt={'Carpet Trust Image'}
        />
        <p className={styles.subtitle}>Find the perfect flooring for your home!</p>
      </header>

      {/* ============== HERO SECTION ============== */}
      <section className={styles.hero} id="hero">
        <img src="/hero_square.png" alt="Carpet Store" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h2>Discover the Best Flooring for Your Home</h2>
          <button className={styles.button1}>Contact</button>
        </div>
      </section>

      {/* ============== FEATURED PRODUCTS SECTION ============== */}
      <section className={styles.products} id="products">
        <h2 className={styles.sectionTitle}>Categories</h2>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <img
              src="/carpet_image1.png"
              alt="Carpet 1"
              className={styles.productImage}
            />
            <div className={styles.productCardText}>
              <h3>Luxury Carpet</h3>
              <p className={styles.categoryPrice}>£7.99 per square meter</p>
              <button className={styles.button1}>View Now</button>
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src="/laminate_image1.png"
              alt="Flooring 1"
              className={styles.productImage}
            />
            <div className={styles.productCardText}>
              <h3>Wooden Flooring</h3>
              <p className={styles.categoryPrice}>£19.99 per square meter</p>
              <button className={styles.button1}>View Now</button>
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src="/vinyl_image1.png"
              alt="Vinyl 1"
              className={styles.productImage}
            />
            <div className={styles.productCardText}>
              <h3>Vinyl Flooring</h3>
              <p className={styles.categoryPrice}>£12.99 per square meter</p>
              <button className={styles.button1}>View Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PREVIOUS WORKS SECTION ============== */}
      <section className={styles.previousWorks} id="previous-works">
        <h2 className={styles.sectionTitle}>Our Previous Works</h2>
        <div className={styles.worksGrid}>
          <div className={styles.workCard}>
            <img
              src="/project1.jpg"
              alt="Project 1"
              className={styles.workImage}
            />
            <h3>Luxury Bedroom Carpet Installation</h3>
            <p>Installed in a modern bedroom, offering a plush and elegant look.</p>
          </div>
          <div className={styles.workCard}>
            <img
              src="/project2.jpg"
              alt="Project 2"
              className={styles.workImage}
            />
            <h3>Wooden Flooring in Living Room</h3>
            <p>Classic wooden flooring that enhances the natural warmth of the space.</p>
          </div>
          <div className={styles.workCard}>
            <img
              src="/project3.jpg"
              alt="Project 3"
              className={styles.workImage}
            />
            <h3>Vinyl Flooring in Kitchen</h3>
            <p>
              Durable vinyl flooring that combines style with practicality in a busy kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* ============== SALE SECTION ============== */}
      <section className={styles.sale} id="sale">
        <h2 className={styles.sectionTitle}>Limited Time Offer</h2>
        <div className={styles.saleGrid}>
          <div className={styles.saleItem}>
            <img
              src="/underlay_image1.jpg"
              alt="Sale Carpet"
              className={styles.saleImage}
            />
          </div>

          <div className={styles.saleItemText}>
            <h1>FREE UNDERLAY</h1>
            
            <p>FREE UNDRELAY with anything over 50 Square Metres</p>
            
          </div>
        </div>
      </section>

      <section className={styles.gridSaleButton}>
        <button className={styles.buttonSale}>Contact</button>
        <button className={styles.buttonSale}>Whatsapp</button>
      </section>

      {/* ============== REVIEWS SECTION ============== */}
      <section className={styles.reviews} id="reviews">
        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
        <div className={styles.reviewGrid}>
          <div className={styles.reviewCard}>
            <p>"Absolutely love the new carpet! It transformed my bedroom into a cozy haven."</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>"The wooden flooring we got is stunning. The installation team was very professional."</p>
            <h4>- Mark R.</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>
              "Amazing service and great value for money. The vinyl flooring looks perfect in our
              kitchen."
            </p>
            <h4>- Emma W.</h4>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className={styles.footer}>
        <p>© 2024 Carpet & Flooring Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
