import React, {useState} from 'react'
import styles from './form.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

export default function Form() {
    const showAlert = () => {
      swal({
          title:"Hola",
          text:"!Has iniciado sesión con éxito!",
          icon:"success"

      })
  }
  const [formData, setFormData] = useState({email:"", password:""})
  const handleChange = (event)=>{setFormData({...formData, [event.target.name]:event.target.value})}
  const navigate = useNavigate()
  const handleSubmit = async(event)=>{event.preventDefault()
     try{
    const response = await axios.post("http://localhost:8000/api/login",formData)
    console.log(response.data)
    navigate("/")
      } catch(error){
        console.log(error.response.data)
      }
  }
  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Inicia sesión</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='mailInput'>Email</label>
                <input name="email" onChange={handleChange} value={formData.email} className={styles.mailInput} type="email" id='mailInput'/>
            </div>    
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='passwordInput'>Password</label>
                <input name="password" onChange={handleChange} value={formData.password} className={styles.password} type="text" id='passwordInput'/>
            </div>
            <button onClick={()=>showAlert()} className={styles.contactSubmit}type='submit'>Continuar</button>
        </form>
    </div>
  )
}
