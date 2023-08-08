import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className='container about'>
            <Navbar />
            <h1>Acerca de Bitcoin Block Container</h1>
            <article>
            <p>
                El estampado con el número de bloque en mensajes importantes es una práctica cada vez más relevante en la era de la tecnología blockchain. Esta documentación explora en detalle cómo esta técnica puede ser utilizada para garantizar la autenticidad, integridad y trazabilidad de mensajes, comunicados y contenido en línea. A medida que la tecnología blockchain continúa ganando adopción, entender y aplicar el estampado con el número de bloque se vuelve esencial para establecer la autenticidad y el tiempo exacto de eventos en el mundo digital.
            </p>
            <p>
                El estampado con el número de bloque proporciona una prueba irrefutable de que un mensaje o contenido existía en un momento determinado. Esta técnica podría ser utilizada para autenticar comunicados oficiales, anuncios de productos, acuerdos contractuales, etc. El público puede verificar de manera independiente la autenticidad y el tiempo del estampado al rastrear el número de bloque en un explorador de bloques.
            </p>

            <p>
                El uso del estampado con número de bloque en redes sociales: empresas, figuras públicas y usuarios pueden utilizarlo para verificar la autenticidad y el momento de publicaciones importantes en plataformas como Twitter.
            </p>

            <p>
                Para finalizar estampar con el número de bloque emerge como una herramienta esencial en la lucha contra la desinformación y la manipulación en línea, al proporcionar una forma confiable de establecer la autenticidad y el momento de los mensajes importantes. Al comprender y adoptar esta técnica, tanto individuos como organizaciones pueden fortalecer la confianza en su contenido y comunicaciones en un mundo digital en constante evolución.
            </p>
            <hr />
            <p>
                Bloque de publicación de este sitio: <span className='publish-bloque'>802177   (8/7/2023, 10:55:50 PM)</span>
            </p>
            </article>
            <Link className='button' to={"/"}>Volver al contador</Link>
            <Footer />
        </main>
    )
}

export default About