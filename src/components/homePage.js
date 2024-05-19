import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./homecss.css";
import HomeDestination from "./HomeDestination";
import HomeFood from "./HomeFood";
import Navbar from "./navbar";

function HomePage() {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");
    const main = document.querySelector("main");

    let xValue = 0,
      yValue = 0,
      rotateDegree = 0;

    function update(cursorPosition) {
      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;

        let zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;

        el.style.transform = `perspective(2300px) translate(${
          zValue * speedz
        }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
      });
    }

    update(0);

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      update(e.clientX);
    });

    if (window.innerWidth >= 725) {
      main.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
      main.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }

    let timeline = gsap.timeline();

    Array.from(parallax_el)
      .filter((el) => !el.classList.contains("text"))
      .forEach((el) => {
        timeline.from(
          el,
          {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
            duration: 1,
            ease: "power3.out",
          },
          "1.5"
        );
      });

    timeline.from(
      ".hide",
      {
        opacity: 0,
        duration: 1.5,
      },
      "1"
    );

    document
      .querySelectorAll(".sejarah .video-container .controls .control-btn")
      .forEach((btn) => {
        btn.onclick = () => {
          let src = btn.getAttribute("data-src");
          document.querySelector(".sejarah .video-container .video").src = src;
        };
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div className="vignette hide"></div>
        <img
          src="/3dasset/background.png"
          data-speedx="0.2"
          data-speedy="0.28"
          data-speedz="0"
          data-rotation="0"
          data-distance="300"
          className="parallax bg-img"
          alt="bg"
        />
        <img
          src="/3dasset/pohon atas.png"
          data-speedx="0.07"
          data-speedy="0.07"
          data-speedz="0"
          data-rotation="0"
          data-distance="370"
          className="parallax pa"
        />
        <img
          src="/3dasset/daun tengah bawah kiri.png"
          data-speedx="0.065"
          data-speedy="0.105"
          data-speedz="0"
          data-rotation="0"
          data-distance="580"
          className="parallax dtbk1"
        />
        <img
          src="/3dasset/daun kanan.png"
          data-speedx="0.1"
          data-speedy="0.21"
          data-speedz="0"
          data-rotation="0"
          data-distance="350"
          className="parallax dk"
        />
        <img
          src="/3dasset/daun tengah bawah kanan.png"
          data-speedx="0.065"
          data-speedy="0.075"
          data-speedz="0.15"
          data-rotation="0.02"
          data-distance="500"
          className="parallax dtbk2"
        />
        <img
          src="/3dasset/ranting kiri.png"
          data-speedx="0.08"
          data-speedy="0.11"
          data-speedz="0"
          data-rotation="0.02"
          data-distance="520"
          className="parallax rk"
        />
        <img
          src="/3dasset/daun kiri bawah .png"
          data-speedx="0.09"
          data-speedy="0.105"
          data-speedz="0"
          data-rotation="0"
          data-distance="430"
          className="parallax dkb"
        />
        <div
          className="textHome parallax"
          data-speedx="0.07"
          data-speedy="0.07"
          data-speedz="0"
          data-rotation="0.11"
        >
          <h2>Kalimantan</h2>
          <h1>Barat</h1>
        </div>

        <img
          src="/3dasset/burung.png"
          data-speedx="0.1"
          data-speedy="0.15"
          data-speedz="0.05"
          data-rotation="0.12"
          data-distance="250"
          className="parallax burung"
        />
      </main>

      <div className="newBody">
        <br></br>
        <br></br>
        <section className="sejarah" id="sejarah">
          <div className="video-container">
            <video
              data-aos="fade-up"
              data-aos-delay="50"
              src="/img/ponti.mp4"
              muted
              autoPlay
              loop
              className="video"
            ></video>
            <div className="controls">
              <span
                className="control-btn"
                data-aos="fade-up"
                data-aos-delay="100"
                data-src="/img/ponti.mp4"
              ></span>
              <span
                className="control-btn"
                data-aos="fade-up"
                data-aos-delay="150"
                data-src="/img/lekumutan.mp4"
              ></span>
              <span
                className="control-btn"
                data-aos="fade-up"
                data-aos-delay="200"
                data-src="/img/ampar.mp4"
              ></span>
            </div>
          </div>

          <div className="content" data-aos="fade-left" data-aos-delay="100">
            <span data-aos="fade-left" data-aos-delay="100">
              Sejarah Kalimantan Barat
            </span>
            <h3 data-aos="fade-left" data-aos-delay="150">
              Ibu Kota Nusantara
            </h3>
            <p data-aos="fade-left" data-aos-delay="200">
            Kalimantan Barat adalah provinsi yang terletak di pulau Borneo, Indonesia. Provinsi ini terkenal dengan keindahan alamnya yang meliputi hutan hujan tropis, sungai besar, dan keanekaragaman hayati yang kaya. Dikelilingi oleh Sungai Kapuas, salah satu sungai terpanjang di Indonesia, Kalimantan Barat juga memiliki kekayaan budaya yang beragam, dengan masyarakat yang terdiri dari berbagai suku dan etnis. Pontianak, ibu kota provinsi, merupakan pusat ekonomi dan budaya yang penting, serta menjadi gerbang menuju petualangan eksplorasi alam yang menakjubkan di Kalimantan Barat.
            </p>
          </div>
        </section>

      </div>
        <HomeDestination />
      <HomeFood />
    </div>
  );
}

export default HomePage;
