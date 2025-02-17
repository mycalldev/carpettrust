import { useState } from 'react'
import styles from './DropDownButton.module.css'

export default function DropDownButton({ text, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.dropdownButton}>
        {text}
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <p>
            {content}
          </p>
        </div>
      )}
    </div>
  )
}
