import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className='container about'>
            <Navbar />
            <h1>About Bitcoin Block Container</h1>
            <article>
            <p>
                Block number stamping on important messages is an increasingly relevant practice in the age of blockchain technology. This white paper explores in detail how this technique can be used to ensure the authenticity, integrity and traceability of messages, communications and online content. As blockchain technology continues to gain adoption, understanding and applying block number stamping becomes essential to establish the authenticity and accurate timing of events in the digital world.
            </p>
            <p>
                Block number stamping provides irrefutable proof that a message or content existed at a particular point in time. This technique could be used to authenticate official communications, product announcements, contractual agreements, etc. The public can independently verify the authenticity and timing of the stamping by tracing the block number in a block explorer.
            </p>

            <p>
                The use of block number stamping in social networks: companies, public figures and users can use it to verify the authenticity and timing of important posts on platforms such as Twitter.
            </p>

            <p>
                Finally, block number stamping emerges as an essential tool in the fight against disinformation and online manipulation by providing a reliable way to establish the authenticity and timing of important messages. By understanding and adopting this technique, both individuals and organizations can strengthen trust in their content and communications in an ever-evolving digital world.
            </p>
            <hr />
            <p>
                Publication block of this site: <span className='publish-bloque'>802400   (9/8/2023, 12:35:53)</span>
            </p>
            </article>
            <Link className='button' to={"/"}>Back to counter</Link>
            <Footer />
        </main>
    )
}

export default About