import React from 'react';
import styles from './publish.module.css';

export default function Publish() {
  return (
    <div className={styles.publishContainer}>
        <h2 className={styles.publishHeading}>Crea tu anuncio</h2>
        <form className={styles.publishForm}>
        <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='proprietorInput'>Propietario</label>
                <input className={styles.proprietorInput} type="text" id='proprietorInput'/>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='titleInput'>Título de la publicación</label>
                <input className={styles.titleInput} type="text" id='titleInput'/>
            </div>
            <div className={styles.location}>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='cityInput'>Ciudad</label>
                    <input className={styles.cityInput} type="text" id='cityInput'/>
                </div>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='zoneInput'>Zona</label>
                    <input className={styles.zoneInput} type="text" id='zoneInput'/>
                </div>
            </div>    
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='priceInput'>Precio</label>
                <input className={styles.priceInput} type="number" id='priceInput'/>
            </div>
            <div className={styles.generalChars}>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='floorInput'>Planta</label>
                    <input className={styles.floorInput} type="number" id='floorInput'/>
                </div>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='surfaceInput'>Superficie en m²</label>
                    <input className={styles.surfaceInput} type="number" id='surfaceInput'/>
                </div>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='bedroomsInput'>Nº Habitaciones</label>
                    <input className={styles.bedroomsInput} type="number" id='bedroomsInput'/>
                </div>
                <div className={styles.inputColumn}>
                    <label className={styles.formLabel} htmlFor='bathroomsInput'>Nº Baños</label>
                    <input className={styles.bathroomsInput} type="number" id='bathroomsInput'/>
                </div>
            </div>
            <div className={styles.input}>
                <label className={styles.formLabel} htmlFor='descriptionInput'>Descripción</label>
                <input className={styles.descriptionInput} type="text" id='descriptionInput'/>
            </div>
            <h2>Características</h2>
            <div className={styles.checkboxInput}>
                <div>
                    <label className={styles.formLabel} htmlFor='parkingInput'>Parking</label>
                    <input className={styles.parkingInput} type="checkbox" id='parkingInput'/>
                </div>
                <div>
                    <label className={styles.formLabel} htmlFor='terraceInput'>Terraza</label>
                    <input className={styles.terraceInput} type="checkbox" id='terraceInput'/>
                </div>
                <div>
                    <label className={styles.formLabel} htmlFor='poolInput'>Piscina</label>
                    <input className={styles.poolInput} type="checkbox" id='poolInput'/>
                </div>
                <div>
                    <label className={styles.formLabel} htmlFor='gardenInput'>Jardín</label>
                    <input className={styles.gardenInput} type="checkbox" id='gardenInput'/>
                </div>
            </div>
            <div className={styles.charInput}>
                <label className={styles.formLabel} htmlFor='characteristicsInput'>Otras Características</label>
                <input className={styles.characteristicsInput} type="text" id='characteristicsInput'/>
                <spam>
                    <button className={styles.addCharBtn}>Añadir</button>
                </spam>
            </div>
            <h2>Fotos del inmueble</h2>
            <button className={styles.addPhotoBtn}>Añadir Foto</button>

            <button className={styles.contactSubmit}type='submit'>Publicar Aviso</button>

        </form>
    </div>
  )
}
