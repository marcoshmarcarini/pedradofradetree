import styles from './Links.module.css'
import Link from 'next/link'

export default function Links() {

    const mensagem = `Olá! Vim do Instagram, quero saber mais sobre os produtos.`
    const mensagemFormatada = mensagem.replace(' ', '%20')
    const telefone = '5528999044546'
    const site = 'https://www.pedradofrade.com.br/'

    return (
        <div className={styles.links_content}>
            <Link
                href={`https://wa.me/${telefone}?text=${mensagemFormatada}`}
                className={styles.link}
            >
                WhatsApp
            </Link>
            <Link
                href={site}
                className={styles.link}
            >
                Nosso Site
            </Link>
        </div>
    )
}