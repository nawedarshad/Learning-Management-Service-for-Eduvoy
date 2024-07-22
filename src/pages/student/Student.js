import React from 'react'
import StudentNav from '../../components/StudentNav'
import styles from '../styles/student.module.css'
import { BiSolidPencil } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";
function Student() {
    const name = "Sagnik Sarkar";
    const phone = "9715863498";
    const email = "sarkar123@gmail.com";
    const password = "123";
    const showNav = ()=>{
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
            <StudentNav page={"home"}/>
            <button className={styles.menu} id='stdMenu' onClick={showNav}><CgMenuRound /></button>
            <section className={styles.bodySection}>
                <div className={styles.header}>
                    <div className={styles.innerHeader}>
                        <img src='../profile.png' alt='profile pic' />
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.detailsDiv}>
                        <div className={styles.detailsFieldsDiv}>
                            <p>Name</p>
                            <div className={styles.input}>
                                <input value={name} type='text' />
                                <BiSolidPencil />
                            </div>
                        </div>
                        <div className={styles.detailsFieldsDiv}>
                            <p>Phone</p>
                            <div className={styles.input}>
                                <input value={phone} type='text' />
                                <BiSolidPencil />
                            </div>
                        </div>
                        <div className={styles.detailsFieldsDiv}>
                            <p>Email</p>
                            <div className={styles.input}>
                                <input value={email} type='text' />
                                <BiSolidPencil />
                            </div>
                        </div>
                        <div className={styles.detailsFieldsDiv}>
                            <p>Password</p>
                            <div className={styles.input}>
                                <input value={password} type='text' />
                                <BiSolidPencil />
                            </div>
                        </div>
                    </div>
                    <div className={styles.continueDiv}>
                        <p>Continue Watching</p>
                        <div className={styles.videosList}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Student