import { useState } from 'react'
import styles from './DropDownButton.module.css'

export default function DropdownMenu({ text }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        {isOpen ? 'Hide Content' : [text]}
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <p>
            This is the extra text displayed when the dropdown is open. 
            You can put any elements in here, like images, lists, or additional components.
          </p>
        </div>
      )}
    </div>
  )
}
