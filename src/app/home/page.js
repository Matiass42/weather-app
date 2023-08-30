"use client"
import { useState } from 'react';
import Serchbar from '../../component/Serchbar'
import styles from './page.module.css'
import Navigation from '../../component/navigation'
import Card from '../../component/Card';
import '../globals.css'

export default function home(){
    const [weatherData, setWeatherData] = useState("");
    const handleWeatherData = (data) => {
        setWeatherData(data);
        console.log(data)
    };
    const renderWeatherContent = () => {
        if (weatherData) {
            return (
                <div className={styles.contcard}>
                <Card
                    min={weatherData.main.temp_min}
                    max={weatherData.main.temp_max}
                    name={weatherData.name}
                    img={weatherData.weather[0].icon}
                    onClose={() => setWeatherData(null)}
                    id={weatherData.id}
                />
                </div>
            );
        } else {
            return <p> </p>;
        }
    };

    return(
        <div>
        <div className={styles.Navbar}>
                <Navigation/>
            </div>
        <div className={styles.allcont}>
            <div className={styles.Serch}>
            <Serchbar onWeatherData={handleWeatherData} />
            </div>
            <div className={styles.DateW}>
            {renderWeatherContent()}
            </div>
        </div>
        </div>
    )
}

