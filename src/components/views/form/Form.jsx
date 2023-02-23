import React from 'react'
import styles from './form.module.css'

export default function Form() {
  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Inicia sesión</h2>
        <form className={styles.contactForm}>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='mailInput'>Email</label>
                <input className={styles.mailInput} type="email" id='mailInput'/>
            </div>    
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='passwordInput'>Password</label>
                <input className={styles.password} type="text" id='passwordInput'/>
            </div>
            <button className={styles.contactSubmit}type='submit'>Continuar</button>
        </form>
    </div>
  )
}
