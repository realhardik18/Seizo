import React from "react";
import logo from './assests/logo.png';
import backgroundImage from './assests/mid.png';
import './about.css'

const About = () => {
    return (
        <div className="text-white w-screen overflow-x-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="upper">
                <p className="logo">
                    <a href="/" className="lg">
                        <img src={logo} alt="logo" className="img" />
                    </a>
                </p>
                <p className="link">
                    <a href="/about" className="about">About Us</a>
                    <a href="/team" className="teams">Our Team</a>
                </p>
            </div>
            <h1>Problem Statement</h1>
            <div className="ps">
                <p>
                    In today's fast-paced retail and manufacturing sectors, sourcing materials and connecting with reliable suppliers is a complex, time-consuming, and inefficient process. Manufacturers, retailers, and middlemen face several challenges, including:
                </p>
                <br />
                <p>- Difficulty in identifying the best sources for materials</p>
                <p>- Inefficiencies in communication and coordination between multiple parties</p>
                <p>- Unorganized access to supplier details like contact information and addresses</p>
                <br />
                <p>For middlemen, these challenges are even more pronounced. They often struggle with:</p>
                <br />
                <p>- Ensuring timely deliveries</p>
                <p>- Lack of a centralized platform to view and compare potential suppliers, leading to delays and lost business opportunities</p>
                <p>- Navigating complex logistics and supply chains without adequate visibility</p>
                <br />
                <p>
                    <strong>Seizo</strong> aims to address these issues by providing an interactive tool that helps manufacturers, retailers, and middlemen identify and visualize potential suppliers and retailers on a map. The platform also offers key details like contact information, addresses, and proximity, allowing middlemen to:
                </p>
                <br />
                <p>- Efficiently source materials from the most optimal suppliers</p>
                <p>- Streamline communication and negotiation processes</p>
                <p>- Organize and manage their network of suppliers</p>
                <br />
                <p>By centralizing supplier data and enhancing supply chain transparency, Seizo empowers users to make informed decisions, improving efficiency, reducing delays, and fostering stronger business relationships.</p>
                <br />
                <p>What is Seizo?</p>
                <br />
                <p>
                    Seizo is an interactive tool designed for retailers, manufacturers, and middlemen to help them easily find and visualize different locations where they can source materials and sell products to retailers. The tool provides users with important details, such as contact information and addresses, displayed on a map, making the sourcing process more convenient and efficient.
                </p>
                <br />
                <p>Seizo's front end is built using React.js, while the backend is powered by a Flask API. The tool collects location data by scraping from Google, and all other necessary information is dynamically generated using Mistral AI, an open-source language model.</p>
            </div>
            <div className="sc">
                <h1>Scalability</h1>
                <p>The scalability of <strong>Seizo</strong> is quite promising due to its flexible technology stack and the large demand in the retail and manufacturing sectors. Here are several reasons why our idea can scale effectively:</p>
                <br />
                <p>1. High Demand Across Industries</p>
                <br />
                <p>- <strong>Seizo</strong> addresses the needs of a broad range of stakeholders, including retailers, manufacturers, and middlemen, all of whom deal with sourcing and supply chain issues.</p>
                <br />
                <p>2. Technology Stack Built for Growth</p>
                <br />
                <p>- <strong>React.js</strong> and <strong>Flask</strong> are widely used, scalable technologies that can handle increased traffic and data processing needs.</p>
                <br />
                <p>3. Global Expansion Potential</p>
                <br />
                <p>- Seizo’s reliance on data scraped from <strong>Google allows</strong> it to expand to different geographical locations seamlessly.</p>
                <br />
                <p>4. <strong>Dynamic Data Integration</strong></p>
                <br />
                <p>- The ability to dynamically generate and update supplier data using <strong>AI</strong> (Mistral AI) means Seizo can continuously improve its database.</p>
                <br />
            </div>
        </div>
    );
};

export default About;
