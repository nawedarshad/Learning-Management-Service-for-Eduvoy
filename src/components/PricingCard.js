import React from 'react'
import styles from './styles/pricing.module.css'

function PricingCard() {
  return (
    <div className={styles.cardMain}>
        <h2>Basic</h2>
        <h2>INR 10000</h2>
        <ul>
            <li>5 Courses</li>
            <li>Upload upto 5 GB</li>
            <li>500 Students</li>
            <li>1 Admin user</li>
            <li>Support 2hr/Week</li>
            <li>Landing Page</li>
            <li>Payment Gateway</li>
        </ul>
        <button>SUBSCRIBE</button>
        <p>+18% GST</p>
    </div>
  )
}

export default PricingCard