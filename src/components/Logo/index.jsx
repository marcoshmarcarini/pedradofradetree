import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo(){
    return(
        <div className={styles.logo_content}>
            <Image 
                src={`/img/logo-pedra-do-frade.png`} 
                width={100}
                height={100}
                className={styles.logo}
                quality={100}
            />
        </div>
    )
}