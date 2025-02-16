import Image from 'next/image'
import styles from './Reviews.module.css'


export default function Reviews() {

    
  return (
    <main className={styles.containerReview}>
      <div className={styles.ratingMainContainer}>
          <div className={styles.rating}>5 Star Reviews:</div>
            <div>
              <div className={styles.ratingGrid}>
                <Image src={'/star.png'} width={32} height={32} className={styles.imageStar} alt='image of star' quality={100} />
                <Image src={'/star.png'} width={32} height={32} className={styles.imageStar} alt='image of star' quality={100} />
                <Image src={'/star.png'} width={32} height={32} className={styles.imageStar} alt='image of star' quality={100} />
                <Image src={'/star.png'} width={32} height={32} className={styles.imageStar} alt='image of star' quality={100} />
                <Image src={'/star.png'} width={32} height={32} className={styles.imageStar} alt='image of star' quality={100} />
              </div>
            </div>
        </div>
    </main>
  )
}

