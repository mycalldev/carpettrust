'use client'

import { useState } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'phone'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Get In Touch</h1>
      
      {/* Quick Contact Options */}
      <div className={styles.quickContact}>
        <a href="tel:07754987116" className={styles.contactCard}>
          <Image src="/phone-icon.png" width={32} height={32} alt="Phone" />
          <span>Call Now</span>
          <p>07754 987116</p>
        </a>
        
        <a href="https://wa.me/+447754987116" className={styles.contactCard}>
          <Image src="/whatsapp.png" width={32} height={32} alt="WhatsApp" />
          <span>WhatsApp</span>
          <p>Quick Message</p>
        </a>
      </div>

      {/* Main Contact Form */}
      <div className={styles.formContainer}>
        <div className={styles.formInfo}>
          <h2>Request a Free Quote</h2>
          <p>Get your same-day estimation and quotation</p>
          <ul className={styles.benefits}>
            <li>✓ Free Consultation</li>
            <li>✓ Sample Viewing at Home</li>
            <li>✓ No Obligation Quote</li>
            <li>✓ Expert Advice</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <select
              value={formData.preferredContact}
              onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
            >
              <option value="phone">Contact by Phone</option>
              <option value="email">Contact by Email</option>
              <option value="whatsapp">Contact by WhatsApp</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Get Free Quote
          </button>
        </form>
      </div>

      {/* Business Hours */}
      <div className={styles.businessHours}>
        <h3>Business Hours</h3>
        <div className={styles.hours}>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: By Appointment</p>
        </div>
      </div>
    </main>
  )
}
