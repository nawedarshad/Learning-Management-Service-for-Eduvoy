import React from 'react'
import ContactComp from '../components/ContactComp'
import FAQ from '../components/FAQ'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import styles from './styles/home.module.css'
function Home() {
  return (
    <div className={styles.homeMain}>
      <section className={styles.topBanner}>
        <div className={styles.content}>
          <div className={styles.headingVector}></div>
          <div className={styles.headingVector + " " + styles.two}></div>
          <div className={styles.text}>
            <h1>Your Gateway to Modern Sophisticated learning</h1>
            <button>Get Started</button>
          </div>
          <div className={styles.img}>
          </div>
        </div>
      </section>
      <section className={styles.cause}>
        <h2>Empowering Agencies Worldwide with Premier Learning Solutions</h2>
        <div className={styles.divider}></div>
        <p>Our Learning Management System (LMS) is designed to empower public
          sector bodies globally, facilitating seamless training and education for over
          100 million citizens. Utilized by more than 5,000 government entities, from local
          councils to central agencies, our platform supports crucial training programs
          across government, education, health, and care sectors. </p>
      </section>
      <Pricing />
      <section className={styles.services}>
        <h2>SERVICES WE PROVIDE</h2>
        <div className={styles.servicesContent}>
          <img src='./lms.png' />
          <div className={styles.servicesText}>
            <h3>Learning Management System</h3>
            <img src='./lms.png' />
            <p>Welcome to the future of public sector
              training and development. Our Learning
              Management System (LMS) is a cutting-
              edge platform tailored specifically for
              governmental and public agencies
              worldwide.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className={styles.capabilities}>
        <h2>Our Cross Sector Capabilities</h2>
        <div className={styles.capabilitiesContent}>
          <div className={styles.capabilitiesText}>
            <ul>
              <li>Cross & Digital Services</li>
              <li>Data, analytics & insight</li>
              <li>Financial management & payments</li>
              <li>People & workforce management</li>
              <li>Governance, risk & compliance</li>
              <li>Logistics & infrastructure</li>
            </ul>
          </div>
          <img src='./team.png' />
        </div>
      </section>
      <FAQ />
      <ContactComp />
    </div>
  )
}

export default Home