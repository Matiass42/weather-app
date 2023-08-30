"use client"
import { useState } from 'react';
import styles from './Serchbar.module.css'

export default function Serchbar({ onWeatherData }) {
    const [city, setCity] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;
        try {
            // Realizar la solicitud a la API utilizando fetch
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eff3e57afd917c001138439ac8339b5f&units=metric`);
            if (!response) {
              throw new Error("La solicitud no se pudo completar");
            }
      
            // Convertir la respuesta en formato JSON
            const data = await response.json()
            onWeatherData(data)
           // return data
      
          } catch (error) {
            console.error("Error al buscar la ciudad:", error);
          }
       //  newLocation(city);
    }

    return(
        <div className={styles.cont}>
            <form onSubmit={onSubmit}>
                <div className={styles.input}>
                    <input type="text" className={styles.inputS} placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className={styles.btn} type="submit">🔍</button>
                </div>
            </form>
        </div>

    );
}
