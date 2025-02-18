'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
      setToggle(!toggle)
  }

  return (
    <main >
      <div className={styles.navContainer}>
        <div className={styles.containerGrid}>
          
            <div onClick={() => handleToggle()} className={styles.containerBurger}>
              <Image
                src={'/hamburger.png'}
                width={32}
                height={32}
                className={styles.imageBurger}
                alt={'menu bar'}
                quality={100}
              />
            </div>
          
          <div>
            <Link href="/#" className={styles.undreline}>
              <div className={styles.titleMain}>Carpet Trust</div>
            </Link>
          </div>

          <div className={styles.containerLogo}>
              <Image
                src={'/carpettrust_logo.jpg'}
                width={64}
                height={64}
                alt={'whatsapp logo'}
                quality={100}
                className={styles.whatsappLogo}
              />
          </div>
        </div>
      </div>
      {toggle ? 
            <nav className={styles.navOpen}>
              <ul className={styles.unorderedList}>
                <Link href={'/'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Home</li>
                  </div>
                </Link>
                <Link href={'/About'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>About</li>
                  </div>
                </Link>
                <Link href={'/Services'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Services</li>
                  </div>
                </Link>
                <Link href={'/Projects'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Projects & Reviews</li>
                  </div>
                </Link>
                <Link href={'/Contact'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Contact</li>
                  </div>
                </Link>
              </ul>
            <div className={styles.closeMenu} onClick={() => handleToggle()}>Close Menu</div>
          </nav> 
            : 
          <div></div>
          }


          {/* DESKTOP NAV */}
          <div className={styles.containerDesktop}> 
            <div className={styles.telGrid}>
              <Image
                    src={'/telephone.png'}
                    width={32}
                    height={32}
                    className={styles.imageBurger}
                    alt={'menu bar'}
                    quality={100}
                  />
             <div className={styles.headerEmail}>07754 987 116</div>
            </div>
            <Link href="/#" className={styles.undreline}>
              <div className={styles.titleMainDesktop}>Carpet Trust</div>
            </Link>

            <div className={styles.containerLogo}>
                <Image
                  src={'/carpettrust_logo.jpg'}
                  width={125}
                  height={125}
                  alt={'logo'}
                  quality={100}
                  className={styles.logo}
                />
            </div>
          </div>
          
          
            <nav className={styles.navContainerGrid}>
              <ul className={styles.navDesktopGrid}>
                <Link href={'/'} className={styles.linkBTN} prefetch={true}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Home</li>
                    </div>
                </Link>
                <Link href={'/about'} className={styles.linkBTN} prefetch={true}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>About</li>
                    </div>
                </Link>
                <Link href={'/previous'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Previous Projects</li>
                    </div>
                  </Link>
                  <Link href={'/current'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Current Projects</li>
                    </div>
                  </Link>
                  <Link href={'/sponsorship'} className={styles.linkBTN} prefetch={true}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Sponsorship</li>
                    </div>
                  </Link>
                  <Link href={'/contact'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Contact</li>
                    </div>
                  </Link>
              </ul>
            </nav>
      
    </main>
  )
}
