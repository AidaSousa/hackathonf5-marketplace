import React from 'react'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Contacta con el anunciante</h2>
        <form className={styles.contactForm}>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='nameInput'>Nombre</label>
                <input className={styles.nameInput} type="text" id='nameInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='phoneInput'>Teléfono</label>
                <input className={styles.phoneInput} type="tel" id='phoneInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='mailInput'>Email</label>
                <input className={styles.mailInput} type="email" id='mailInput'/>
            </div>    
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='commentInput'>Comentario</label>
                <input className={styles.commentInput} type="text" id='commentInput'/>
            </div>
            <button className={styles.contactSubmit}type='submit'>Contactar</button>
        </form>
    </div>
  )
}
