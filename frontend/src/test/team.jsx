import React from "react";
import './team.css'

const Team = () => {
    return (
        <div className="text-white w-screen overflow-x-hidden">
            <div className="upper">
                <p className="logo">
                    <a href="newindex.html" className="lg">
                        <img src="assets/logo.png" alt="logo" className="img" />
                    </a>
                </p>
                <p className="link">
                    <a href="about.html" className="about">About Us</a>
                    <a href="team.html" className="teams">Our Team</a>
                </p>
            </div>
            <div className="container">
                <h1 style={{ color: "rgb(228, 228, 228)" }}>Meet Our Team</h1>
                <div className="team">
                    <div className="team-member">
                        <img src="assets/Hardik.png" alt="Teammate 1" />
                        <h2 style={{ color: "rgb(228, 228, 228)" }}>Hardik Singh</h2>
                        <div className="links">
                            <a href="https://github.com/realhardik18" target="_blank">
                                <img className="photo" src="assets/Github image.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/realhardik18/" target="_blank">
                                <img className="photo" src="assets/twitter image 2.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="assets/karman.png" alt="Teammate 2" />
                        <h2 style={{ color: "rgb(228, 228, 228)" }}>Karman Singh</h2>
                        <div className="links">
                            <a href="https://github.com/Karman-singh15" target="_blank">
                                <img className="photo" src="assets/Github image.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/karman-singh-151610217/" target="_blank">
                                <img className="photo" src="assets/twitter image 2.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="assets/lakshya.png" alt="Teammate 3" />
                        <h2 style={{ color: "rgb(228, 228, 228)" }}>Lakshya Sharma</h2>
                        <div className="links">
                            <a href="https://github.com/thunderboyk" target="_blank">
                                <img className="photo" src="assets/Github image.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/lakshya-sharma-97b1982b4/" target="_blank">
                                <img className="photo" src="assets/twitter image 2.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
