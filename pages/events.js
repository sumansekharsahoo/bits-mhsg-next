import React from 'react'
import Event from '@/components/Event'
import styles from '../styles/Events.module.css'
const events = () => {
  return (
    <div className={styles.events}>
      <Event/>
    </div>
  )
}

export default events