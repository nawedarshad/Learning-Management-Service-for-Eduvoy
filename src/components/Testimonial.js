import React from 'react'
import styles from './styles/testimonial.module.css'
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
function Testimonial() {
  return (
    <>
    <div className={styles.mainDiv}>
      <h2>Our Customers' Say</h2>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className={styles.testimonyCard}>
          <div className={styles.clientDetails}>
            <img src='./user_profile.webp' />
            <div className={styles.clientAbout}>
              <span className={styles.clientName}>Deepak Chowdary</span>
              <span>Trainer at XYZ Institute</span>
            </div>
          </div>
          <p>“As a long-time administrator in the public sector, I've seen various training tools and platforms
            come and go, but this Learning Management System truly stands out. Our agency has been
            using it for over a year, and the impact on our training efficiency and effectiveness is
            unmistakable. The user interface is intuitive and easy to navigate, which significantly reduces
            the learning curve for our staff.” </p>
        </div>
    </div>
    <div class="carousel-item">
    <div className={styles.testimonyCard}>
          <div className={styles.clientDetails}>
            <img src='./user_profile.webp' />
            <div className={styles.clientAbout}>
              <span className={styles.clientName}>Deepak Chowdary</span>
              <span>Trainer at XYZ Institute</span>
            </div>
          </div>
          <p>“As a long-time administrator in the public sector, I've seen various training tools and platforms
            come and go, but this Learning Management System truly stands out. Our agency has been
            using it for over a year, and the impact on our training efficiency and effectiveness is
            unmistakable. The user interface is intuitive and easy to navigate, which significantly reduces
            the learning curve for our staff.” </p>
        </div>
    </div>
    <div class="carousel-item">
    <div className={styles.testimonyCard}>
          <div className={styles.clientDetails}>
            <img src='./user_profile.webp' />
            <div className={styles.clientAbout}>
              <span className={styles.clientName}>Deepak Chowdary</span>
              <span>Trainer at XYZ Institute</span>
            </div>
          </div>
          <p>“As a long-time administrator in the public sector, I've seen various training tools and platforms
            come and go, but this Learning Management System truly stands out. Our agency has been
            using it for over a year, and the impact on our training efficiency and effectiveness is
            unmistakable. The user interface is intuitive and easy to navigate, which significantly reduces
            the learning curve for our staff.” </p>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  )
}

export default Testimonial







