import React from "react";
import './Team.css';

// Import images
import logo from './assests/logo.png';
import hardikImg from './assests/Hardik.png';
import karmanImg from './assests/karman.png';
import lakshyaImg from './assests/lakshya.png';
import githubLogo from './assests/github-image.png';
import linkedinLogo from './assests/tw-2.png';

const Team = () => {
    return (
        <div className="text-white w-screen overflow-x-hidden">
            <header className="upper">
                <p className="logo">
                    <a href="/" className="lg">
                        <img src={logo} alt="Company Logo" className="img" />
                    </a>
                </p>
                <nav className="link">
                    <a href="/about" className="about">About Us</a>
                    <a href="/team" className="teams">Our Team</a>
                </nav>
            </header>
            <div className="container">
                <h1 style={{ color: "rgb(228, 228, 228)" }}>Meet Our Team</h1>
                <section className="team">
                    {[
                        {
                            name: "Hardik Singh",
                            img: hardikImg,
                            github: "https://github.com/realhardik18",
                            linkedin: "https://www.linkedin.com/in/realhardik18/"
                        },
                        {
                            name: "Karman Singh",
                            img: karmanImg,
                            github: "https://github.com/Karman-singh15",
                            linkedin: "https://www.linkedin.com/in/karman-singh-151610217/"
                        },
                        {
                            name: "Lakshya Sharma",
                            img: lakshyaImg,
                            github: "https://github.com/thunderboyk",
                            linkedin: "https://www.linkedin.com/in/lakshya-sharma-97b1982b4/"
                        }
                    ].map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.img} alt={`${member.name}'s photo`} />
                            <h2 style={{ color: "rgb(228, 228, 228)" }}>{member.name}</h2>
                            <div className="links">
                                <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub profile of ${member.name}`}>
                                    <img className="photo" src={githubLogo} alt="GitHub logo" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`}>
                                    <img className="photo" src={linkedinLogo} alt="LinkedIn logo" />
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Team;
