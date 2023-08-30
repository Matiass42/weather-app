import styles from './Card.module.css'
import Image from 'next/image';

export default function Card({ min, max, name, img, onClose, id }) {
    return (
        <div className={styles.CardCont}>
            <button onClick={onClose} className={styles.btn}>X</button>
            <div className="Bodycard">
                <div className="tituloCard">
                    <h2>{name}</h2>
                </div>
                <div className="Cardimg">
                <Image
                        className="iconoClima"
                        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>
                <div className="tempMax">
                    <p>max</p> <p>{max}°</p>
                </div>
                <div className="tempMin">
                    <p>min</p> <p>{min}°</p>
                </div>
            </div>
        </div>
    );
}