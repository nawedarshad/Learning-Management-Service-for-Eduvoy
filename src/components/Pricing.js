import React from 'react'
import PricingCard from './PricingCard'
import styles from './styles/pricing.module.css'
function Pricing() {
  return (
    <div className={styles.mainDiv}>
      <h2>PRICING</h2>
      <div className={styles.packageTime}>
        <button className='active'>Monthly</button>
        <button >Yearly</button>
      </div>
      <div className={styles.pricingList}>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
      </div>
    </div>
  )
}

export default Pricing