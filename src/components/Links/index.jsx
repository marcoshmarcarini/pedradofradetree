import { useEffect, useState } from 'react'
import styles from './Links.module.css'
import Link from 'next/link'


export default function Links() {

    const mensagem = `Olá! Vim do Instagram, quero saber mais sobre os produtos.`
    const mensagemFormatada = mensagem.replace(' ', '%20')
    const telefone = '5528999044546'
    const site = 'https://www.pedradofrade.com.br/'

    const [language, setLanguage] = useState('')

    useEffect(() => {
        const browserLanguage = navigator.language || navigator.languages[0]
        setLanguage(browserLanguage)
    }, [])

    /* 
        Aqui eu coloquei um algoritmo que recupera a lingua do navegador
        Agora é só colocar uma lógica para aparecer o catálogo em inglês 
        ou português dependendo do lugar onde a pessoa está.
        só acessar o estado `${language}`, se for pt-BR é só mostrar em 
        português, senão mostrar em inglês.
    */


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
                Visit our website
            </Link>


        </div>
    )
}