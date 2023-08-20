import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className='container about'>
            <Navbar />
            <h1>The Decentralized Clock</h1>
            <h4>Ensuring Authenticity and Timing Accuracy with the Blockchain Number Stamp</h4>
            <article>
            <p>
                In the age of blockchain technology, authenticity and time are critical. The practice of sealing block numbers in essential messages, a technique that has arrived to revolutionize how we understand authenticity and the exact timing of digital events.
            </p>
            <p>
                A Time Stamp of Authenticity.
                Imagine having the ability to prove that a message existed at a precise moment in time. Block number sealing gives you this authentication tool. Whether validating official communications, advertising products or securing contractual agreements, this seal offers irrefutable proof. And best of all: the public can independently verify this seal by tracking the block number in a block explorer.
            </p>
            <p>
                Empowering Social Networks.
                It doesn't stop there. Social networks, the digital heart of our society, can also benefit from this technique. Companies, celebrities and users can use the block number stamp to validate the authenticity and timing of crucial posts on platforms such as Twitter. In a world where information can be manipulated, this stamp adds an essential touch of trust.
            </p>
            <p>
                The fight against disinformation takes an exciting turn with block number sealing. How? By offering a reliable way to establish the authenticity and timing of crucial messages, this technique becomes a vital weapon against false narratives online. Whether an individual or an organization, block number sealing strengthens trust in an ever-evolving digital world.
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