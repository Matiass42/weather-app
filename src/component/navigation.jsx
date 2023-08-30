import Link from "next/link"
import styles from './navigation.module.css'

const link = [{
    label: 'home',
    route: '/home'
},{
    label: 'about',
    route: '/about'
}]

export default function Navigation(){
    return(
        <div className={styles.allcont}>
            <nav>
                <p className={styles.listaL}>
                    {link.map(({label,route},index)=>(
                        <h2 key={index}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </h2>
                    ))}
                </p>
            </nav>
        </div>
    )
}
