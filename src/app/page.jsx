import styles from './page.module.css'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'


//import df from '../../public/img'
export default function Home() {
  return (
    <div className={styles.allcont}>
      <h1>weather app</h1>
      <div className={styles.posB}>
        <Link href={'/home'}>
        <Image
        className={styles.imgB}
        src="/img/nube.png"   
        width={200}
        height={100}
        alt="Picture of the author"  
         />
        <p className={styles.imageText}>Go</p>
        </Link>
      </div>
    </div>
  )
}
