'use client'

import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality, using only premium materials and proven installation techniques.",
      icon: "🌟"
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you to ensure the perfect result.",
      icon: "👥"
    },
    {
      title: "Professional Excellence",
      description: "Our experienced team brings expertise and attention to detail to every project.",
      icon: "⭐"
    },
    {
      title: "Reliability",
      description: "We pride ourselves on punctuality, clear communication, and meeting deadlines.",
      icon: "🤝"
    }
  ]

  const expertise = [
    {
      title: "Carpet Installation",
      description: "Expert fitting of all carpet types, from luxury wool to durable synthetics",
      image: "/Jobs/Bromley_Flat/image1.JPG"
    },
    {
      title: "Stair Runners",
      description: "Specialized installation of elegant stair runners with precise fitting",
      image: "/Jobs/Penge_sisal/image1.JPG"
    },
    {
      title: "Vinyl Flooring",
      description: "Professional vinyl installation with pattern matching and seamless finish",
      image: "/Jobs/Vinyl_Pattern_City/image1.JPG"
    }
  ]

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

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <span className={styles.valueIcon}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.expertise}>
        <h2>Our Expertise</h2>
        <div className={styles.expertiseGrid}>
          {expertise.map((item, index) => (
            <div key={index} className={styles.expertiseCard}>
              <div className={styles.expertiseImage}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Carpet Trust?</h2>
        <div className={styles.whyChooseContent}>
          <div className={styles.whyChooseText}>
            <p>With over two decades of experience, we've built our reputation on:</p>
            <ul>
              <li>✓ Free, no-obligation quotes</li>
              <li>✓ Expert advice on flooring solutions</li>
              <li>✓ Professional installation team</li>
              <li>✓ Competitive pricing</li>
              <li>✓ After-service support</li>
            </ul>
          </div>
          <div className={styles.whyChooseImage}>
            <Image
              src="/underlay.jpg"
              width={500}
              height={300}
              alt="Professional carpet installation"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact us today for a free consultation and quote</p>
        <div className={styles.ctaButtons}>
          <a href="/Contact" className={styles.primaryButton}>Get Free Quote</a>
          <a href="tel:07754987116" className={styles.secondaryButton}>Call Now</a>
        </div>
      </section>
    </main>
  )
}