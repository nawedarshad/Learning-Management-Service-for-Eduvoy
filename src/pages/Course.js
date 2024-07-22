import React from 'react'
import styles from './styles/course.module.css'
import { IoIosStar } from "react-icons/io";
// import video from '../../public/sample-video.mp4'
function Course() {
    const courseTopics = [
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        },
        {
            topic: "Harness Training",
            duration: 50,
            videos: 10,
        }
    ]
    return (
        <div className={styles.mainDiv}>
            <section className={styles.head}>
                <div className={styles.titleRating}>
                    <h1>Course Title</h1>
                    <div className={styles.rating}>
                        <div className={styles.stars}>
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </div>
                        <p>Excellent Rating</p>
                    </div>

                </div>
                <div className={styles.titleAbout}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt quia quos distinctio ex esse ad? Provident aliquam magnam eum reiciendis rem, illum voluptate? Quod deserunt at earum, beatae, nesciunt nam pariatur ut </p>
                    <p className={styles.mainPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt quia quos distinctio ex esse ad? Provident aliquam magnam eum reiciendis rem, illum voluptate? Quod deserunt at earum, beatae, nesciunt nam pariatur ut consectetur maiores animi reprehenderit voluptatem, maxime debitis? Veniam eaque ab temporibus dolorum amet accusamus vel rem accusantium.</p>
                    <p>consectetur maiores animi reprehenderit voluptatem, maxime debitis? Veniam eaque ab temporibus dolorum amet accusamus vel rem accusantium.</p>
                </div>
            </section>
            <section className={styles.body}>
                <div className={styles.floatingDiv}>
                    <video className={styles.videoDiv} controls autoPlay muted>
                        <source src='../Videos/sample-video.mp4' type='video/mp4' />
                    </video>
                    <div className={styles.pricingDiv}>
                        <div className={styles.price}>
                            <span className={styles.discountedPrice}>
                                ₹ {4999}
                            </span>
                            <span className={styles.actualPrice}>₹ {10+","+202.05}</span>
                            <span className={styles.discountAmnt}>{49}% OFF</span>
                        </div>
                        <button className={styles.buyNow}>Buy Now</button>
                    </div>
                </div>
                <div className={styles.courseContent}>
                    <h3>Course Content</h3>
                    <div className={styles.contentPoints}>
                        <ul>
                            <li>One Content</li>
                            <li>Two Content</li>
                            <li>Three Content</li>
                            <li>Four Content</li>
                        </ul>
                        <ul>
                            <li>Five Content</li>
                            <li>Six Content</li>
                            <li>Seven Content</li>
                            <li>Eight Content</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.courseStructure}>
                    <h3>Course Structure</h3>
                    <div className={styles.courseStructureTable}>
                        <div>
                            {
                                courseTopics.map((e, index) => {
                                    return <li key={index}>
                                        <span>{(index + 1) + ". " + e.topic}</span>
                                        <span>{"( " + e.videos + " videos - " + e.duration + "mins )"}</span>
                                    </li>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.courseAbout}>
                    <h3>About the Course</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis aut illum expedita quod iste fugit, in eum necessitatibus eligendi quas facilis quae repellat eveniet! Quia aut perferendis esse ducimus culpa asperiores quaerat
                        <br />
                        <br />
                        Nemo eaque perferendis velit, ipsa vero delectus eveniet inventore cum, rem rerum exercitationem animi doloribus molestiae voluptatum dolores maxime quam corrupti,
                    </p>
                    <ul>
                        <li>Minima quod nisi veniam </li>
                        <li>Sapiente perferendis </li>
                        <li>Deleniti eaque  </li>
                        <li>Nesciunt esse  </li>
                    </ul>
                    <p>A quia! Eligendi consequatur veniam incidunt nihil, sint molestiae optio reiciendis praesentium nostrum reprehenderit.</p>
                </div>
            </section>
        </div>
    )
}

export default Course