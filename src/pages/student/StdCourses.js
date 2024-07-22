import React from 'react'
import StudentNav from '../../components/StudentNav'
import VideoList from '../../components/VideoList'
import styles from '../styles/student.module.css'
import { CgMenuRound } from "react-icons/cg";
function StdCourses() {
  const showNav = () => {
    var nav = document.getElementById('studentNav');
    var menu = document.getElementById('stdMenu');
    if (nav.style.maxWidth === '') {
      nav.style.maxWidth = '100%';
      menu.style.color = 'rgba(2, 73, 81, 1)';
    } else {
      nav.style.maxWidth = '';
      menu.style.color = 'rgba(255, 255, 255, 1)';
    }
  }

  return (
    <div className={styles.mainDiv}>
      <StudentNav page={"courses"} />
      <button className={styles.menu} id='stdMenu' onClick={showNav}><CgMenuRound /></button>
      <section className={styles.bodySection}>
        <div className={styles.secondHeader}>
          <h1 className={styles.normalHOne}>Courses</h1>
        </div>
        <div className={styles.content}>
          <VideoList title={"Purchased Courses"} />
          <VideoList title={"Completed Courses"} />
          <VideoList title={"Shortlisted Courses"} />
        </div>
      </section>
    </div>
  )
}

export default StdCourses