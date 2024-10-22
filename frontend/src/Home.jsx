import React from "react";
import logo from './assests/logo.png';
import githubIcon from './assests/github-image.png';
import videoSrc from './assests/bg-vid.mp4';
import midImage from './assests/mid.png';
import './Home.css'

const Home = () => {
    return (
        <div className="text-white w-screen overflow-x-hidden">
            <section className="open" id="open">
                <div className="upper">
                    <p className="logo">
                        <a href="/" className="lg">
                            <img src={logo} alt="logo" className="img" />
                        </a>
                    </p>
                    <p className="link">
                        <a href="/about" className="about">About Us</a>
                        <a href="/team" className="team">Our Team</a>
                    </p>
                </div>
                <h1 className="text-pop-up-top">
                    <a className="scroll" href="#mid">Seizō</a>
                </h1>
                <p className="social">
                    <a target="_blank" href="https://github.com/realhardik18/Seizo">
                        <img src={githubIcon} alt="github" className="github" />
                    </a>
                </p>
            </section>

            <section className="mid" id="mid">
                <video autoPlay muted playsInline className="background-clip">
                    <source src={videoSrc} type="video/mp4" />
                    <img src={midImage} alt="mid" />
                </video>
                <p className="func">
                    Seizo is an interactive tool designed for retailers, manufacturers, and middlemen
                    to help them easily find and visualize different locations where they can source
                    materials and sell products to retailers. The tool provides users with important
                    details, such as contact information and addresses, displayed on a map,
                    making the sourcing process more convenient and efficient.
                </p>
                <a href="/map">
                    <button className="but">Start Now</button>
                </a>
                <br />
                <a href="#open">
                    <button className="top">^</button>
                </a>
            </section>
        </div>
    );
};

export default Home;
