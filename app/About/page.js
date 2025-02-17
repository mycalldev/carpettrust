'use client'

import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>About Carpet Trust</h1>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src="/underlay.jpg"
              width={600}
              height={400}
              alt="Carpet Trust team"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2>Family Run Business Since 2004</h2>
            <p>With over 21 years of experience in the flooring industry, Carpet Trust has established itself as a trusted name in quality carpets and professional installation.</p>
            <ul className={styles.features}>
              <li>Expert Installation Team</li>
              <li>Wide Range of Flooring Solutions</li>
              <li>Free Consultation & Quotes</li>
              <li>Premium Quality Products</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}