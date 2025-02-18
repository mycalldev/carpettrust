'use client'

import styles from './services.module.css'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "Lettings & Sales",
      description: "Specialized solutions for landlords and estate agents. We understand the unique requirements of rental properties and help maintain high property values with quality flooring installations.",
      features: [
        "Quick turnaround times",
        "Durable materials ideal for rental properties",
        "Competitive pricing for bulk projects",
        "End of tenancy flooring replacement"
      ],
      image: "/lettings.jpg"
    },
    {
      title: "Stair Runners",
      description: "Transform your stairs with our bespoke stair runner installation service. We offer a wide range of styles and materials to enhance both safety and aesthetics.",
      features: [
        "Custom-fitted runners",
        "Anti-slip installation",
        "Decorative rods available",
        "Wide range of patterns and materials"
      ],
      image: "/stairs.jpg"
    },
    {
      title: "Sub Floor Preparation",
      description: "Professional sub floor preparation ensuring a perfect foundation for your new flooring. Our thorough approach guarantees long-lasting results.",
      features: [
        "Floor leveling",
        "Damp proofing",
        "Underfloor heating preparation",
        "Concrete and wooden subfloor solutions"
      ],
      image: "/subfloor.jpg"
    },
    {
      title: "Carpet Installation",
      description: "Expert carpet installation services for residential and commercial properties. We work with all types and styles of carpeting.",
      features: [
        "Professional fitting service",
        "Pattern matching",
        "Seam sealing",
        "Underlay installation"
      ],
      image: "/carpet.jpg"
    }
  ]

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>Professional Flooring Solutions for Every Need</p>
      </section>

      <section className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                width={400}
                height={300}
                alt={service.title}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.additionalServices}>
        <h2>Additional Services</h2>
        <div className={styles.additionalGrid}>
          <div className={styles.additionalCard}>
            <h3>Vinyl Flooring</h3>
            <p>Professional installation of vinyl flooring, perfect for kitchens and bathrooms</p>
          </div>
          <div className={styles.additionalCard}>
            <h3>Laminate Flooring</h3>
            <p>Expert fitting of laminate flooring with proper expansion gaps and underlay</p>
          </div>
          <div className={styles.additionalCard}>
            <h3>Entrance Matting</h3>
            <p>Professional installation of heavy-duty entrance matting systems designed to protect your floors and enhance safety. Perfect for commercial entrances, helping to reduce maintenance costs by trapping dirt and moisture at the door.</p>
          </div>
          <div className={styles.additionalCard}>
            <h3>Repair Services</h3>
            <p>Professional repair and maintenance of existing flooring</p>
          </div>
          <div className={styles.additionalCard}>
            <h3>Consultancy</h3>
            <p>Expert advice on flooring solutions, material selection, and installation methods. Our consultancy service helps you make informed decisions about subfloor preparation, moisture testing, and the most suitable flooring options for your space.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact us today for a free consultation and quote</p>
        <div className={styles.ctaButtons}>
          <a href="/Contact" className={styles.primaryButton}>Get Quote</a>
          <a href="tel:07754987116" className={styles.secondaryButton}>Call Now</a>
        </div>
      </section>
    </main>
  )
}
