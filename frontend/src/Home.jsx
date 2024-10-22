import React from "react";

const Home = () => {
    return (
        <div className="text-white w-screen overflow-x-hidden">
            {/* Header */}
            <header className="w-screen border-b-2 border-white bg-gray-900">
                <div className="flex justify-between items-center h-20 px-5">
                    <a href="/index" className="w-20 h-20">
                        <img src="final logo.jpg" alt="Brand logo" />
                    </a>
                    <div className="flex space-x-10">
                        <a href="/about" className="pt-6 text-white hover:text-gray-400">
                            About Us
                        </a>
                        <a href="/team" className="pt-6 text-white hover:text-gray-400">
                            Our Team
                        </a>
                    </div>
                </div>
            </header>

            {/* Section */}
            <section className="w-screen flex">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-1/2 h-auto object-cover"
                >
                    <source src="Indian Map Animation.mp4" type="video/mp4" />
                </video>
                <div className="w-1/2 flex flex-col justify-center space-y-8 px-10">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Assumenda sunt repudiandae enim explicabo omnis suscipit aut iusto non!
                        Obcaecati maxime quos quo earum nam quas dolor praesentium corporis nobis!
                        Debitis cumque non voluptatem animi! Libero commodi repudiandae sit at illum
                        laboriosam quia sequi porro praesentium similique? Delectus repellendus eligendi
                        labore deleniti placeat, earum reprehenderit ipsam fugit autem commodi officiis
                        architecto nihil vero excepturi voluptates, sint, quidem veniam. Quidem, dolor magnam.
                    </p>
                    <div className="text-center">
                        <a href="/map">
                            <button className="btn btn-outline btn-success btn-wide">
                                Start Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-screen h-48 flex">
                <div className="w-1/2 h-48 bg-white"></div>
                <div className="w-1/2 h-48 bg-gray-600"></div>
            </footer>
        </div>
    );
};

export default Home;
