import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/studentnav.module.css'
import { useNavigate } from 'react-router-dom';
function StudentNav({ page }) {
  const navigate = useNavigate();
  var home = <span>Profile</span>;
  var courses = <span>Courses</span>;
  var certificates = <span>Certificates</span>;
  var invoices = <span>Invoices</span>;
  if (page == 'home') {
    home = <span style={{ backgroundColor: 'rgba(0, 49, 53, 1)' }}>Profile</span>
  }
  else if (page == 'courses') {
    courses = <span style={{ backgroundColor: 'rgba(0, 49, 53, 1)' }}>Courses</span>
  }
  else if (page == 'certificates') {
    certificates = <span style={{ backgroundColor: 'rgba(0, 49, 53, 1)' }}>Certificates</span>
  }
  else if (page == 'invoices') {
    invoices = <span style={{ backgroundColor: 'rgba(0, 49, 53, 1)' }}>Invoices</span>
  }

  const toHomePage = () => {
    navigate(`/`);
  }
  return (
      <div id='studentNav' className={styles.mainDiv}>
        <Link to='/student/01'>{home}</Link>
        <Link to='/student/courses/01'>{courses}</Link>
        <Link to='/student/certificates/01'>{certificates}</Link>
        <Link to='/student/invoices/01'>{invoices}</Link>
        <button onClick={toHomePage}>LogOut</button>
      </div>
  )
}

export default StudentNav