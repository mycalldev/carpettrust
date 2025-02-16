'use client'

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import SliderBar from './components/SliderBar';
import ImageCarousel from './components/ImageCarousel';
import DropDownButton from './components/DropDownButton';
import Review from './components/Review';

export default function Home() {

  const buttonText = {
    hard: 'Hard Wearing',
    durable: 'Durable',
    stain: 'Stain Safe',
    low: 'Maintainable'
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Carpet & Flooring Store</title>
        <meta name="description" content="Best Carpet and Flooring Products" />
      </Head>
      
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
      </header>

      {/* ============== HERO SECTION ============== */}
      <section className={styles.hero} id="hero">
        <Image 
          width={1022}
          height={728}
          src="/hero_edited.png" 
          alt="Carpet Store" 
          className={styles.heroImage}
          quality={100} 
        />
        <div className={styles.heroText}>
          <h2>Discover the Best Flooring for Your Home</h2>
        </div>
      </section>

      {/* =============== SAME DAY QUOTATION ==================== */}
      <div className={styles.containerSameDay}>
        <p className={styles.textSameDay}>Same Day Estimation and Quotation</p>
      </div>
      <div className={styles.containerBTN}>

      <button className={styles.button2} href={'tel:07754987116'}>Contact</button>
      </div>

      <ImageCarousel />

      <div className={styles.gridDropDownButton}>
        <DropDownButton text={buttonText.hard} />
        <DropDownButton text={buttonText.durable}/>
        <DropDownButton text={buttonText.stain}/>
        <DropDownButton text={buttonText.low}/>
      </div>

      <div className={styles.whatsappLogoContainer}>
        <Image
          src={'/whatsapp.png'}
          width={64}
          height={64}
          alt={'whatsapp logo'}
          quality={100}
          className={styles.whatsappLogo}
        />
      </div>

      <div className={styles.whatsappBanner}>
        <p>Contact Us Directly Via Whatsapp Messaging Service</p>
      </div>

      {/* ============== SAMPLES TO DOOR ===================== */}

      <div className={styles.containerImageDoor}>
        <Image 
        src={'/carpet_samples.jpg'} 
        width={612} 
        height={408} 
        quality={100} 
        alt='image of samples' 
        className={styles.imageDoor}
        />

      <div className={styles.textSamples}>
        <p>We Bring The Samples To Your Door</p>
      </div>
      </div>

      <Review />
      {/* <div className={styles.containerBTN}>
        <button className={styles.reviewBTN}>Veiw</button>
      </div> */}

      <div className={styles.containerMybuilder}>
        100% Positive Feedback on MyBuilder
        <div>
          <Link href={'https://www.mybuilder.com/profile/carpet-trust'}>
            <Image 
            src={'/mybuilder2.png'} 
            width={250} 
            height={250} 
            alt='mybuilder logo' 
            quality={100} 
            className={styles.mybuilderImage}
            />
          </Link>
        </div>
      </div>
{/* ============== NUMBER SECTION ============== */}
      <section>
        <div className={styles.containerGridNumbers}>
          <Image 
          className={styles.numberImage}
          src={'/number-one.png'} 
          width={64} 
          height={64} 
          alt='number 1' 
          quality={100} 
          />
        <div className={styles.numberText}> Perfect Price</div>
        <Image 
          src={'/number-2.png'} 
          width={64} 
          height={64} 
          alt='number 1' 
          quality={100} 
          />
        <div className={styles.numberText}> Expert Service</div>
        <Image 
          src={'/number-3.png'} 
          width={64} 
          height={64} 
          alt='number 1' 
          quality={100} 
          />
        <div className={styles.numberText}> Best Price Guarantee</div>
        </div>
      </section>

      {/* ============== ABOUT US SECTION ============== */}
      <section>
        <div className={styles.containerAboutUs}>
          <Image 
          src={'/underlay.jpg'}
          width={1000}
          height={667}
          alt='about us' 
          quality={100} 
          className={styles.aboutUsImage}
          />
        </div>

        <div className={styles.containerAboutUsText}>
          <div>Carpet Trust is a Family Run Business</div>
          <div>With 21 Years Experience</div>
          <div>We Offer a Wide Range of Flooring Solutions</div>
          <div>From Carpets, Vinyl and Laminate Flooring</div>
          <div>We Offer a Range of Underlay Options</div>
          <div>We Offer a Free Measuring and Quotation Service</div>
        
        </div>

        <div className={styles.containerBTN}>

      <button className={styles.button2} href={'tel:07754987116'}>Contact</button>
      </div>
      </section>




      <footer className={styles.footer}>
        <p>© 2024 Carpet & Flooring Store. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
      // <section className={styles.previousWorks} id="previous-works">
      //   <h2 className={styles.sectionTitle}>Our Previous Works</h2>
      //   <div className={styles.worksGrid}>
      //     <div className={styles.workCard}>
      //       <img
      //         src="/project1.jpg"
      //         alt="Project 1"
      //         className={styles.workImage}
      //       />
      //       <h3>Luxury Bedroom Carpet Installation</h3>
      //       <p>Installed in a modern bedroom, offering a plush and elegant look.</p>
      //     </div>
      //     <div className={styles.workCard}>
      //       <img
      //         src="/project2.jpg"
      //         alt="Project 2"
      //         className={styles.workImage}
      //       />
      //       <h3>Wooden Flooring in Living Room</h3>
      //       <p>Classic wooden flooring that enhances the natural warmth of the space.</p>
      //     </div>
      //     <div className={styles.workCard}>
      //       <img
      //         src="/project3.jpg"
      //         alt="Project 3"
      //         className={styles.workImage}
      //       />
      //       <h3>Vinyl Flooring in Kitchen</h3>
      //       <p>
      //         Durable vinyl flooring that combines style with practicality in a busy kitchen.
      //       </p>
      //     </div>
      //   </div>
      // </section> */}

      {/* ============== SALE SECTION ============== */}
      {/* <section className={styles.sale} id="sale">
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
      </section> */}

      {/* <section className={styles.gridSaleButton}>
        <button className={styles.buttonSale}>Contact</button>
        <button className={styles.buttonSale}>Whatsapp</button>
      </section> */}

      {/* ============== REVIEWS SECTION ============== */}
      {/* // <section className={styles.reviews} id="reviews">
      //   <h2 className={styles.sectionTitle}>Customer Reviews</h2>
      //   <div className={styles.reviewGrid}>
      //     <div className={styles.reviewCard}>
      //       <p>"Absolutely love the new carpet! It transformed my bedroom into a cozy haven."</p>
      //       <h4>- Sarah J.</h4>
      //     </div>
      //     <div className={styles.reviewCard}>
      //       <p>"The wooden flooring we got is stunning. The installation team was very professional."</p>
      //       <h4>- Mark R.</h4>
      //     </div>
      //     <div className={styles.reviewCard}>
      //       <p>
      //         "Amazing service and great value for money. The vinyl flooring looks perfect in our
      //         kitchen."
      //       </p>
      //       <h4>- Emma W.</h4>
      //     </div>
      //   </div>
      // </section> */}

