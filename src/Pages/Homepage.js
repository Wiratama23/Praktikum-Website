import React from "react";
import Hero from "../Components/hero";
import Footer from "../Components/footer";

const HomePage = () => {
  return (
    <main id="home">
      <section className="vh-100">
        <Hero />
        <div className="container h-100 position-relative">
          <div className="row h-100">
            <div className="col-md-5 my-auto text-white">
              <h1>Selamat Datang</h1>
              <h2>di website Praktikum Pemrograman Website</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
