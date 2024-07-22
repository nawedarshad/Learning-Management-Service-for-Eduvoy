import React from 'react'
import CourseCard from '../components/CourseCard'
import styles from './styles/shop.module.css'
function Shop() {
  return (
    <main className={styles.mainDiv}>
      <section className={styles.shopTop}>
        <h1>Welcome to Safety World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quo incidunt quia quos distinctio.<br/> Ex esse ad? Provident aliquam magnam eum reiciendis rem, illum voluptate.</p>
        <button>View Course</button>
      </section>
      <section className={styles.courses+" "+styles.one}>
        <h2>Popular Courses</h2>
        <div className={styles.coursesList}>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </section>
      <section className={styles.courses}>
        <h2>Courses You May Like</h2>
        <div className={styles.coursesList}>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </section>
      <section className={styles.courses +" "+styles.one}>
        <h2>See What Other Are Saying</h2>
        <div className={styles.testiBoxList}>
          <div className={styles.testiBox}>
            <p> Quod deserunt at earum, beatae, nesciunt nam pariatur ut consectetur maiores animi reprehenderit voluptatem, maxime debitis.</p>
            <div className={styles.clientAbout}>
            <img src='./user_profile.webp' />
            <span>Nawed Arshad</span>
            </div>
          </div>
          <div className={styles.testiBox}>
            <p> Quod deserunt at earum, beatae, nesciunt nam pariatur ut consectetur maiores animi reprehenderit voluptatem, maxime debitis.</p>
            <div className={styles.clientAbout}>
            <img src='./user_profile.webp' />
            <span>Nawed Arshad</span>
            </div>
          </div>
          <div className={styles.testiBox}>
            <p> Quod deserunt at earum, beatae, nesciunt nam pariatur ut consectetur maiores animi reprehenderit voluptatem, maxime debitis.</p>
            <div className={styles.clientAbout}>
            <img src='./user_profile.webp' />
            <span>Nawed Arshad1</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.courses}>
        <h2>All Skills in One Place</h2>
        <div className={styles.coursesList}>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </section>
    </main>
  )
}

export default Shop