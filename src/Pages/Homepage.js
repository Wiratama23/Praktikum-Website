import React from "react";

const HomePage = () => {
  return (
    <main id="home">
      <section className="vh-100">
        <img
          className="position-absolute w-100 h-100"
          src="/img/hero.jpg"
          alt="hero-ilab"
          draggable="false"
        />
        <div className="container h-100 position-relative">
          <div className="row h-100">
            <div className="col-md-5 my-auto text-white">
              <h1>Selamat Datang</h1>
              <h2>di website Praktikum Pemrograman Website</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
