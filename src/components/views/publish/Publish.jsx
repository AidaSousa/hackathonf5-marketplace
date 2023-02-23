import React, { useState } from "react";
import styles from "./publish.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Publish() {
  const [titulo, setTitulo] = useState("");
  const [propietario, setPropietario] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [zona, setZona] = useState("");
  const [precio, setPrecio] = useState("");
  const [planta, setPlanta] = useState("");
  const [extension, setExtension] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const [fotos, setFotos] = useState([]);

  const handleInputChange = (event) => {
    const values = event.target.value.split("\n").map((v) => v.trim());
    console.log(values)
    setFotos(values);

  };

  const url = "http://localhost:8000/api/pisos";

  const getAllProjects = async () => {
    const response = await axios.get("http://localhost:8000/api/pisos/");
    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("user_id", "8");
      formData.append("titulo", titulo);
      formData.append("propietario", propietario);
      formData.append("ciudad", ciudad);
      formData.append("zona", zona);
      formData.append("precio", precio);
      formData.append("habitaciones", habitaciones);
      formData.append("baños", baños);
      formData.append("planta", planta);
      formData.append("descripcion", descripcion);
      formData.append("extension", extension);
      formData.append("isFavorite", 0);
      formData.append("fotos", fotos);
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Submitted fotos:", fotos);
      getAllProjects();
      navigate("/");
    } catch (error) {
      console.log("ERRRR:: ", error.response.data);
    }
  };

  return (
    <div className={styles.publishContainer}>
      <button onClick={getAllProjects}>HEY</button>
      <h2 className={styles.publishHeading}>Crea tu anuncio</h2>
      <form onSubmit={handleSubmit} className={styles.publishForm}>
        <div className={styles.input}>
          <label className={styles.formLabel} htmlFor="proprietorInput">
            Propietario
          </label>
          <input
            className={styles.proprietorInput}
            type="text"
            id="proprietorInput"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label className={styles.formLabel} htmlFor="titleInput">
            Título de la publicación
          </label>
          <input
            className={styles.titleInput}
            type="text"
            id="titleInput"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className={styles.location}>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="cityInput">
              Ciudad
            </label>
            <input
              className={styles.cityInput}
              type="text"
              id="cityInput"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="zoneInput">
              Zona
            </label>
            <input
              className={styles.zoneInput}
              type="text"
              id="zoneInput"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <label className={styles.formLabel} htmlFor="priceInput">
            Precio
          </label>
          <input
            className={styles.priceInput}
            type="number"
            id="priceInput"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className={styles.generalChars}>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="floorInput">
              Planta
            </label>
            <input
              className={styles.floorInput}
              type="number"
              id="floorInput"
              value={planta}
              onChange={(e) => setPlanta(e.target.value)}
            />
          </div>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="surfaceInput">
              Superficie en m²
            </label>
            <input
              className={styles.surfaceInput}
              type="number"
              id="surfaceInput"
              value={extension}
              onChange={(e) => setExtension(e.target.value)}
            />
          </div>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="bedroomsInput">
              Nº Habitaciones
            </label>
            <input
              className={styles.bedroomsInput}
              type="number"
              id="bedroomsInput"
              value={habitaciones}
              onChange={(e) => setHabitaciones(e.target.value)}
            />
          </div>
          <div className={styles.inputColumn}>
            <label className={styles.formLabel} htmlFor="bathroomsInput">
              Nº Baños
            </label>
            <input
              className={styles.bathroomsInput}
              type="number"
              id="bathroomsInput"
              value={baños}
              onChange={(e) => setBaños(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <label className={styles.formLabel} htmlFor="descriptionInput">
            Descripción
          </label>
          <input
            className={styles.descriptionInput}
            type="text"
            id="descriptionInput"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <h2>Características</h2>
        <div className={styles.checkboxInput}>
          <div>
            <label className={styles.formLabel} htmlFor="parkingInput">
              Parking
            </label>
            <input
              className={styles.parkingInput}
              type="checkbox"
              id="parkingInput"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="terraceInput">
              Terraza
            </label>
            <input
              className={styles.terraceInput}
              type="checkbox"
              id="terraceInput"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="poolInput">
              Piscina
            </label>
            <input
              className={styles.poolInput}
              type="checkbox"
              id="poolInput"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="gardenInput">
              Jardín
            </label>
            <input
              className={styles.gardenInput}
              type="checkbox"
              id="gardenInput"
            />
          </div>
        </div>
        <div className={styles.charInput}>
          <label className={styles.formLabel} htmlFor="characteristicsInput">
            Otras Características
          </label>
          <input
            className={styles.characteristicsInput}
            type="text"
            id="characteristicsInput"
          />
          <div>
            <label htmlFor="items">Fotos</label>
            <textarea
              id="items"
              value={fotos.join("\n")}
              onChange={handleInputChange}
            />
            <ul>
              {fotos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <span>
            <button className={styles.addCharBtn}>Añadir</button>
          </span>
        </div>
        <h2>Fotos del inmueble</h2>
        <button className={styles.addPhotoBtn}>Añadir Foto</button>

        <button className={styles.contactSubmit} type="submit">
          Publicar Aviso
        </button>
      </form>
    </div>
  );
}
