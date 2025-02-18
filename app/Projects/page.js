'use client'

import styles from './projects.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Bromley Flat Project",
      category: "flat",
      images: [
        "/Jobs/Bromley_Flat/image1.JPG",
        "/Jobs/Bromley_Flat/image2.jpg",
        "/Jobs/Bromley_Flat/image3.jpg",
        "/Jobs/Bromley_Flat/image4.jpg",
        "/Jobs/Bromley_Flat/image5.jpg",
        "/Jobs/Bromley_Flat/image6.jpg",
        "/Jobs/Bromley_Flat/image7.jpg"
      ],
      description: "Complete flat renovation with modern carpet installation throughout",
      location: "Bromley",
      review: {
        name: "Sarah Johnson",
        rating: 5,
        text: "Exceptional service from start to finish. The team was professional, punctual, and the carpet fitting is perfect.",
        date: "March 2024"
      }
    },
    {
      title: "Sydenham Project",
      category: "residential",
      images: [
        "/Jobs/Sydenham/image1.JPG",
        "/Jobs/Sydenham/image2.JPG",
        "/Jobs/Sydenham/image3.JPG",
        "/Jobs/Sydenham/image4.JPG",
        "/Jobs/Sydenham/image5.JPG",
        "/Jobs/Sydenham/image6.JPG",
        "/Jobs/Sydenham/image7.JPG",
        "/Jobs/Sydenham/image8.JPG"
      ],
      description: "Complete residential carpet installation",
      location: "Sydenham",
      review: {
        name: "Mark Williams",
        rating: 5,
        text: "Very impressed with the quality of work. They helped me choose the right flooring for my rental properties.",
        date: "February 2024"
      }
    },
    {
      title: "City Vinyl Pattern Installation",
      category: "vinyl",
      images: [
        "/Jobs/Vinyl_Pattern_City/image1.JPG",
        "/Jobs/Vinyl_Pattern_City/image2.JPG",
        "/Jobs/Vinyl_Pattern_City/image3.JPG",
        "/Jobs/Vinyl_Pattern_City/image4.JPG",
        "/Jobs/Vinyl_Pattern_City/image5.JPG",
        "/Jobs/Vinyl_Pattern_City/image6.JPG"
      ],
      description: "Custom vinyl pattern flooring installation in city property",
      location: "City of London",
      review: {
        name: "James Cooper",
        rating: 5,
        text: "Outstanding vinyl installation. The pattern matching is perfect and the finish is exactly what we wanted.",
        date: "January 2024"
      }
    },
    {
      title: "Penge Sisal Stair Installation",
      category: "stairs",
      images: [
        "/Jobs/Penge_sisal/image1.JPG",
        "/Jobs/Penge_sisal/image2.JPG",
        "/Jobs/Penge_sisal/image3.JPG",
        "/Jobs/Penge_sisal/image4.JPG",
        "/Jobs/Penge_sisal/image5.JPG",
        "/Jobs/Penge_sisal/image6.JPG",
        "/Jobs/Penge_sisal/image7.JPG",
        "/Jobs/Penge_sisal/image8.JPG",
        "/Jobs/Penge_sisal/image9.JPG",
        "/Jobs/Penge_sisal/image10.JPG",
        "/Jobs/Penge_sisal/image11.JPG",
        "/Jobs/Penge_sisal/image12.JPG",
        "/Jobs/Penge_sisal/image13.JPG",
        "/Jobs/Penge_sisal/image14.JPG",
        "/Jobs/Penge_sisal/image15.JPG",
        "/Jobs/Penge_sisal/image16.JPG",
        "/Jobs/Penge_sisal/image17.JPG",
        "/Jobs/Penge_sisal/image18.JPG",
        "/Jobs/Penge_sisal/image19.JPG"
      ],
      description: "Natural sisal stair runner installation with elegant binding",
      location: "Penge",
      review: {
        name: "Emily Parker",
        rating: 5,
        text: "Beautiful sisal stair runner installation. The natural look has transformed our staircase. Highly professional service.",
        date: "March 2024"
      }
    }
  ]

  const filterProjects = (category) => {
    setActiveFilter(category)
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Our Projects & Reviews</h1>
        <p>Discover our recent work and what our customers say</p>
      </section>

      <section className={styles.projectsSection}>
        <h2>Recent Projects</h2>
        
        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => filterProjects('all')}
          >
            All Projects
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'flat' ? styles.active : ''}`}
            onClick={() => filterProjects('flat')}
          >
            Flat Projects
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'residential' ? styles.active : ''}`}
            onClick={() => filterProjects('residential')}
          >
            Residential
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'stairs' ? styles.active : ''}`}
            onClick={() => filterProjects('stairs')}
          >
            Stair Runners
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'vinyl' ? styles.active : ''}`}
            onClick={() => filterProjects('vinyl')}
          >
            Vinyl Flooring
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {projects
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className={`${styles.projectSwiper} customSwiper`}
                >
                  {project.images.map((image, imageIndex) => (
                    <SwiperSlide key={imageIndex}>
                      <div className={styles.projectImage}>
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${imageIndex + 1}`}
                          width={400}
                          height={300}
                          className={styles.image}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className={styles.location}>{project.location}</span>
                  
                  <div className={styles.reviewSection}>
                    <div className={styles.reviewHeader}>
                      <h4>{project.review.name}</h4>
                      <div className={styles.stars}>{'★'.repeat(project.review.rating)}</div>
                    </div>
                    <p className={styles.reviewText}>{project.review.text}</p>
                    <span className={styles.reviewDate}>{project.review.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and quote</p>
        <div className={styles.ctaButtons}>
          <a href="/Contact" className={styles.primaryButton}>Get Quote</a>
          <a href="tel:07754987116" className={styles.secondaryButton}>Call Now</a>
        </div>
      </section>
    </main>
  )
} 