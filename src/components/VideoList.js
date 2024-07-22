import React from 'react'
import { useState } from 'react'
import styles from '../../src/pages/styles/student.module.css'
function VideoList({title}) {
    const [style, setStyle] = useState({ maxHeight: '302px' });
    const [btnContent, setBtnContent] = useState('View More');
    const purchaseVM = () => {
        if (btnContent == 'View More') {
          setStyle({ maxHeight: "605px" })
          setBtnContent('View Less')
        } else {
          setStyle({ height: '302px'  })
          setBtnContent('View More')
        }
      }
    return (
        <div className={styles.continueDiv}>
            <p>{title}</p>
            <div className={styles.videosList} style={style}>
                <div></div>
                <div></div>
                <div className={styles.hidden} ></div>
                <div className={styles.hidden} ></div>
            </div>
            <button className={styles.viewMore} onClick={purchaseVM}>{btnContent}</button>
        </div>
    )
}

export default VideoList






