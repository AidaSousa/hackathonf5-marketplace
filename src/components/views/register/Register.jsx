import React, {useState} from 'react'
import styles from '../form/form.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
export default function Register() {
    const showAlert = () => {
        swal({
            title:"Bienvenido",
            text:"!Te has registrado con éxito!",
            icon:"success"

        })
    }

  const [formData, setFormData] = useState({name:"", email:"", username:"", password:"", password_confirmation:"", user_type:""})
  const handleChange = (event)=>{setFormData({...formData, [event.target.name]:event.target.value})}
  const navigate = useNavigate()
  const handleSubmit = async(event)=>{event.preventDefault()
     try{
    const response = await axios.post("http://localhost:8000/api/register",formData)
    console.log(response.data)
    navigate("/")
      } catch(error){
        console.log(error.response.data)
      }
  }
  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Registrate</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='nameInput'>Nombre</label>
                <input name="name" onChange={handleChange} value={formData.name} className={styles.nameInput} type="name" id='nameInput'/>
            </div>    
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='emailInput'>Email</label>
                <input name="email" onChange={handleChange} value={formData.email} className={styles.email} type="text" id='emailInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='usernameInput'>Nombre de Usuario</label>
                <input name="username" onChange={handleChange} value={formData.username} className={styles.username} type="text" id='usernameInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='passwordInput'>Contraseña</label>
                <input name="password" onChange={handleChange} value={formData.password} className={styles.password} type="text" id='passwordInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='passwordInput'>Contraseña</label>
                <input name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} className={styles.password} type="text" id='passwordInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='user_typeInput'>Tipo de Usuario</label>
                <select name="user_type" onChange={handleChange} value={formData.user_type} className={styles.user_type} type="text" id='user_typeInput'>
                    <option value={"cliente"}>Cliente</option>
                    <option value={"usuario"}>Usuario</option>
                </select>
            </div>
            <button onClick={()=>showAlert()} className={styles.contactSubmit}type='submit'>Registrarse</button>
            <Link style={{textDecoration: 'none', color: '#5C5ABC'}} to="/">Regresar a la Página Principal</Link>
        </form>
    </div>
  )
}
