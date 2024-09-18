import Navbar from "../components/navbar";
import "../styles/works.css";
import logos from "../assets/images/logos.png";
import testIm from "../assets/images/img3.jpeg";
import fic_work from "../assets/images/fic_work.jpg";
import docum_im from "../assets/images/docum_im.jpg";
import char_anim from "../assets/images/char_anim.jpg";
import inov_img from "../assets/images/inov_img.jpg";
import sci_img from "../assets/images/sci_img.jpg";
// import work_bg from "../assets/vid/workbg-video.mp4";
import { useEffect, useRef, useState } from "react";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

// fic imags
import fic1Im1 from "../assets/images/Ficition/Fic1/im1.jpeg";
import fic1Im2 from "../assets/images/Ficition/Fic1/im2.jpeg";
import fic1Im3 from "../assets/images/Ficition/Fic1/im3.jpeg";

import fic2Im1 from "../assets/images/Ficition/fic2/im1.jpeg";
import fic2Im2 from "../assets/images/Ficition/fic2/im2.jpeg";
import fic2Im3 from "../assets/images/Ficition/fic2/im3.jpeg";
import fic2Im4 from "../assets/images/Ficition/fic2/im4.jpeg";
import fic2Im5 from "../assets/images/Ficition/fic2/im5.jpeg";
import fic2Im6 from "../assets/images/Ficition/fic2/im6.jpeg";

import fic3Im1 from "../assets/images/Ficition/fic3/im1.jpeg";
import fic3Im2 from "../assets/images/Ficition/fic3/im2.jpeg";
import fic3Im3 from "../assets/images/Ficition/fic3/im3.jpeg";
import fic3Im4 from "../assets/images/Ficition/fic3/im4.jpeg";
import fic3Im5 from "../assets/images/Ficition/fic3/im5.jpeg";

import fic4Im1 from "../assets/images/Ficition/fic4/im1.jpeg";

import fic5Im1 from "../assets/images/Ficition/fic5/im1.jpeg";
import fic5Im2 from "../assets/images/Ficition/fic5/im2.jpeg";
import fic5Im3 from "../assets/images/Ficition/fic5/im3.jpeg";
import fic5Im4 from "../assets/images/Ficition/fic5/im4.jpeg";
import fic5Im5 from "../assets/images/Ficition/fic3/im5.jpeg";

import fic6Im1 from "../assets/images/Ficition/fic6/im1.jpeg";
import fic6Im2 from "../assets/images/Ficition/fic6/im2.jpeg";

import fic7Im1 from "../assets/images/Ficition/fic7/im1.jpeg";
import fic8Im1 from "../assets/images/Ficition/fic8/im1.jpeg";
import fic9Im1 from "../assets/images/Ficition/fic9/im1.jpeg";
import fic10Im1 from "../assets/images/Ficition/fic10/im1.jpeg";
import fic11Im1 from "../assets/images/Ficition/fic11/im.jpeg";

import sci1Im1 from "../assets/images/SciAnim/sci1/im1.jpeg";
import sci2Im1 from "../assets/images/SciAnim/sci2/im1.jpeg";
import sci3Im1 from "../assets/images/SciAnim/sci3/im1.jpeg";
import sci4Im1 from "../assets/images/SciAnim/sci4/im1.jpeg";
import sci5Im1 from "../assets/images/SciAnim/sci5/im1.jpeg";
import sci6Im1 from "../assets/images/SciAnim/sci6/im1.jpeg";
import sci7Im1 from "../assets/images/SciAnim/sci7/im1.jpeg";
import sci8Im1 from "../assets/images/SciAnim/sci8/im1.jpeg";
import sci9Im1 from "../assets/images/SciAnim/sci9/im1.jpeg";
import sci10Im1 from "../assets/images/SciAnim/sci10/im1.jpeg";
import sci11Im1 from "../assets/images/SciAnim/sci11/im1.jpeg";
import sci12Im1 from "../assets/images/SciAnim/sci12/im1.jpeg";
import sci13Im1 from "../assets/images/SciAnim/sci13/im1.jpeg";
import sci14Im1 from "../assets/images/SciAnim/sci14/im1.jpeg";
import sci15Im1 from "../assets/images/SciAnim/sci15/im1.jpeg";
import sci16Im1 from "../assets/images/SciAnim/sci16/im1.jpeg";
import sci17Im1 from "../assets/images/SciAnim/sci17/im1.jpeg";
import sci18Im1 from "../assets/images/SciAnim/sci18/im1.jpeg";
import sci19Im1 from "../assets/images/SciAnim/sci19/im1.jpeg";
import sci20Im1 from "../assets/images/SciAnim/sci20/im1.jpeg";
import sci21Im1 from "../assets/images/SciAnim/sci21/im1.jpeg";
import sci22Im1 from "../assets/images/SciAnim/sci22/im1.jpeg";
import sci23Im1 from "../assets/images/SciAnim/sci23/im1.jpeg";
import sci24Im1 from "../assets/images/SciAnim/sci24/im1.jpeg";
import sci25Im1 from "../assets/images/SciAnim/sci25/im1.jpeg";

const Works = () => {
  //   var works_type_select = "Fiction Films";

  const [works_type_select, setworks_type_select] = useState("");
  //   const [works_type_selectnext, setworks_type_selectnext] = useState("");
  const list_of_works = [
    {
      type: "Fiction Films",
      title: "MEASURING THE EARTH (2/2)",
      more_images: [fic1Im2, fic1Im3],
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: fic1Im1,
    },
    {
      type: "Fiction Films",
      title: "SUMMER REBELS ",
      more_images: [fic2Im2, fic2Im3, fic2Im4, fic2Im5, fic2Im6],
      type_info: "Feature film, 92min, German-Slovak coproduction",
      more_info:
        "Summer Rebels was shortlisted for German Film Award 2021 and won the GERMAN FILM CRITICS’ AWARD for Best Children’s Film in the same year. Running in competition at numerous national and international festivals it received various awards. Licensed by Netflix in several European countries the film also saw a theatrical release in Germany, Slovakia, Czech Republic and Austria. More information:",
      image: fic2Im1,
    },
    {
      type: "Fiction Films",
      title: "ARIZONA JOE ",
      more_images: [fic3Im2, fic3Im3, fic3Im4, fic3Im5],
      type_info: "Series (6x45min) in development",
      more_info:
        "A wild Soviet Era roller coaster by Matīss Kaža in co-production with TRICKSTER Pictures (LTV) , FILMKOLEKTIV (CZ) & WHAT IF Films (SK)",
      image: fic3Im1,
    },
    {
      type: "Fiction Films",
      title: "MY WORLD UPSIDE DOWN ",
      more_images: [fic4Im1],
      type_info: "Feature film in development, 90min",
      more_info:
        "Cco-production with WHAT IF Films (SK), director: Daniel Rihak. Winner of Havc Development Award '23, POPup Award '23 and Orka Award´22.Development  supported by Slovak Film Fund.",
      image: fic4Im1,
    },
    {
      type: "Fiction Films",
      title: "MPOLYCULE",
      more_images: [fic5Im2, fic5Im3, fic5Im4, fic5Im5],
      type_info: "Mini-series, dramedy (9x20min) in development",
      more_info:
        "Authors: Edda Lina Janz und Sophie de Frenne, with concept for all episodes finished.",
      image: fic5Im1,
    },
    {
      type: "Fiction Films",
      title: "BUDDIES 4EVAH",
      more_images: [fic6Im2],
      type_info: "Comedy series in rewrite",
      more_info: "Authors: Sülke Schulz & Martina Sakova",
      image: fic6Im1,
    },
    {
      type: "Fiction Films",
      title: "NEPTUN",
      more_images: [],
      type_info: "Middle-length film, 38min",
      more_info:
        "In a mix of mockumentary and re-enactment Adela Babanova traces a failed attempt at revealing state sponsored disinformation. Coproduction with Czech television, Bratri s.r.o. and MagicLab.",
      image: fic7Im1,
    },
    {
      type: "Fiction Films",
      title: "SCHWIMMER",
      more_images: [],
      type_info: "Short film, 29min",
      more_info:
        "Sound design for Marcin Malaszczak highly aestheticized film whose narrative is based on the network of the Berlin city map.",
      image: fic8Im1,
    },
    {
      type: "Fiction Films",
      title: "BLACK SHEEP",
      more_images: [],
      type_info: "Feature Film, 92min, German-Swiss coproduction",
      more_info:
        "SFX for Berlin Underground cult hit featuring Tom Schilling and Robert Stadlober. Coproduction: Stäfa Switzerland & KoboiFilm Germany",
      image: fic9Im1,
    },
    {
      type: "Fiction Films",
      title: "CAT EFFECT",
      more_images: [],
      type_info: "Middle-length film, 40min",
      more_info:
        "Sound design for the experimental film 'Cat Effect' by Melissa Dullius and Gustavo Jahn",
      image: fic10Im1,
    },
    {
      type: "Fiction Films",
      title: "TRIANGULUM",
      more_images: [],
      type_info: "Middle-length film, 22min",
      more_info:
        "A wild Soviet Era roller coaster by Matīss Kaža in co-production with TRICKSTER Pictures (LTV) , FILMKOLEKTIV (CZ) & WHAT IF Films (SK)",
      image: fic11Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "HISTORY OF SURVIVAL",
      type_info: "Animation for science show TERRA X, broadcaster ZDF / arte",
      more_info:
        "Client: UFA documentaryAnimation for science show TERRA X, broadcaster ZDF / arte",
      image: sci1Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "POLAR CIRCLE",
      type_info: "Animation for science show TERRA X, broadcaster ZDF",
      more_info: "",
      image: sci2Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "BUTTENDIEK",
      type_info:
        "Animation and sound design for an image film for wind park operator WPD",
      more_info: "",
      image: sci3Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "STARS ABOVE JENA (1/2)",
      type_info: "Fulldome film for the Zeiss Planetarium Jena",
      more_info:
        "The 360° film was designed with today’s viewing habits in mind. Using spectacular camera movements, a modern cinematic narrative and a contemporary language style, history can be experienced in a new way.",
      image: sci4Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MYSTERIOUS PHENOMAS (1/2)",
      type_info:
        "Animation for knowledge magazine TERRA X on German public TV channel ZDF",
      more_info: "",
      image: sci5Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MYSTERIOUS PHENOMAS (1/2)",
      type_info: "Animation for science program TERRA X, ZDF",
      more_info:
        "Second series of a shop about seemingly unexplained phenomena",
      image: sci6Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MEASURING THE EARTH (1/2)",
      type_info: "3D animations for renowned science show TERRA X, ZDF",
      more_info: "From the Nebra sky disk to GPS | with Harald Lesch | 43 min",
      image: sci7Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "TABU – MYSTERIOUS PLACES",
      type_info: "3D animations for science magazine TERRA X, ZDF",
      more_info:
        "The new episode of TABU (43min) delves into the unknown from enigmatic Area 51 in Nevada through Greenland to a lost treasure in the Caribbean.",
      image: sci8Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "STARS ABOVE JENA (2/2)",
      type_info: "Fulldome film for the Zeiss Planetarium Jena",
      more_info:
        "By employing spectacular camera movements, cinematic narrative and an engaging language this 360° film caters to modern viewing habits to experience history.",
      image: sci9Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: sci10Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NAPOLEON IN JENA",
      type_info: "Fulldome film",
      more_info:
        "A showcase of history under the stars, the movie takes audiences on a journey through the Napoleonic period in Central Germany and was screened on Planetarium Jena's mobile fulldome.",
      image: sci11Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NATURA JENENSIS",
      type_info: "Fulldome film for VR venue",
      more_info:
        "In this project, we created the fulldome footage and converted it into a 360 degree format for use in VR.",
      image: sci12Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "PATAGONIA",
      type_info: "Animation for knowledge program TERRA X on ZDF (Germany)",
      more_info: "",
      image: sci13Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "POSTBASE",
      type_info: "Image film for PostBase products",
      more_info: "Agency: MEDIA BRICKS, Germany",
      image: sci14Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NEW ZEALAND",
      type_info: "Animation for science show TERRA X, broadcaster ZDF",
      more_info: "",
      image: sci15Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "SCHINDLER",
      type_info: "VFX for image film for elevator manufacturer Schindler",
      more_info: "Agency: MEDIA BRICKS",
      image: sci16Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "DUHOK 2015",
      type_info:
        "Theatrical trailer for International Film Festival Duhok, Kurdistan Iraq 2015",
      more_info: "",
      image: sci17Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "BIATHLON WORLD CUP",
      type_info:
        "6×1“ visualisations of the Biathlon World Cup race track, broadcaster ARD Germany",
      more_info: "",
      image: sci18Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "THE TUBE",
      type_info: 'Image film for lift system "The Tube"',
      more_info: "",
      image: sci19Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "ENABLE2START",
      type_info: "Image film for Financial Times Germany",
      more_info: "Agency: Flemming Pfuhl / Play Media",
      image: sci20Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "UBITRICITY",
      type_info: "Image film for Ubitricity",
      more_info: "",
      image: sci21Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "FROZEN WORLD",
      type_info:
        "Motion design and animation for science program TERRA X / ZDF Germany",
      more_info: "",
      image: sci22Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "THE SIBERIAN ADVENTURE",
      type_info:
        "Animations for science program Terra X on German public channel ZDF",
      more_info: "",
      image: sci23Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MULTIPEN",
      type_info: "Animation for TV show Galileo, PRO7, Germany",
      more_info: "",
      image: sci24Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "TORNADO GALILEO SPEZIAL",
      type_info:
        "Animations and VFX for a special edition of science show Galileo, Pro7",
      more_info: "",
      image: sci25Im1,
    },
    {
      type: "Character Animation",
      more_images: [],
      title: "HEAVY MENTAL",
      type_info: "Animated short film, German-Slovak coproduction",
      more_info:
        "Imagine getting kicked out of school and your best friend just became possessed by the devil. Can it get any worse?! Yes, it can...",
      image: testIm,
    },
    {
      type: "Documentaries",
      title: "MEASURING THE EARTH (2/2)",
      more_images: [],
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: testIm,
    },
    {
      type: "Innovative Solutions",
      more_images: [],
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: testIm,
    },
  ];

  const handle_works_type_select_change = (type) => {
    // setworks_type_selectnext(type);

    setworks_type_select(type);
    // setworks_type_selectnext("");

    // if (works_type_select != "" && works_type_selectnext != "") {
    //   if (works_type_selectnext == works_type_select) {
    //     setworks_type_select("");
    //     setworks_type_selectnext("");
    //   } else if (works_type_selectnext != works_type_select) {
    //     setworks_type_select(works_type_selectnext);
    //     setworks_type_selectnext(type);
    //   }
    // }
    // console.log(works_type_select);
    // console.log(works_type_selectnext);
  };

  //   document.addEventListener("click", function (event) {
  //     // Check if the click was outside the element

  //     document.querySelectorAll(".work").forEach((e) => {
  //       if (!e.contains(event.target)) {
  //         alert("Clicked outside the element!");
  //       }
  //     });
  //   });

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Ensure video plays in a loop
      videoElement.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );

      // Play the video (with autoplay considerations)
      videoElement.muted = true; // Mute video to comply with autoplay policies
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", function () {
          this.currentTime = 0;
          this.play();
        });
      }
    };
  }, []);

  return (
    <div className="works">
      {/* <video src={work_bg} className="work_bg" id="backGbW" autoPlay></video> */}
      {/* <video src={work_bg} id="backGbW" autoplay loop muted playsinline></video> */}
      {/* <video
        id="backGbW"
        ref={videoRef}
        src={work_bg}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <Navbar />
      <h1>Works</h1>
      <div className="works_nav">
        <div
          className="work"
          onClick={() => {
            handle_works_type_select_change("Fiction Films");
          }}
        >
          <div className="img">
            <img src={fic_work} alt="" />
          </div>
          <div
            className={`text ${
              works_type_select === "Fiction Films" ? "active" : ""
            }`}
          >
            <p>Fiction Films</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() =>
            handle_works_type_select_change("Scientific Animation")
          }
        >
          <div className="img">
            <img src={sci_img} alt="" />
          </div>
          <div
            className={`text ${
              works_type_select === "Scientific Animation" ? "active" : ""
            }`}
          >
            <p>Scientific Animation</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() => handle_works_type_select_change("Character Animation")}
        >
          <div className="img">
            <img src={char_anim} alt="" />
          </div>
          <div
            className={`text ${
              works_type_select === "Character Animation" ? "active" : ""
            }`}
          >
            <p>Character Animation</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() => handle_works_type_select_change("Documentaries")}
        >
          <div className="img">
            <img src={docum_im} alt="" />
          </div>
          <div
            className={`text ${
              works_type_select === "Documentaries" ? "active" : ""
            }`}
          >
            <p>Documentaries</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() =>
            handle_works_type_select_change("Innovative Solutions")
          }
        >
          <div className="img">
            <img src={inov_img} alt="" />
          </div>
          <div
            className={`text ${
              works_type_select === "Innovative Solutions" ? "active" : ""
            }`}
          >
            <p>Innovative Solutions</p>
          </div>
        </div>
      </div>

      {works_type_select !== "" && (
        <ShowWorks
          list_of_works={list_of_works}
          works_type_select={works_type_select}
          setworks_type_select={setworks_type_select}
        />
      )}

      {works_type_select === "" && <WorksInfo />}

      <Footer />
    </div>
  );
};

const WorksInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="info">
      <div className="text">
        <p>
          We specialise in three film areas. As each idea is unique and requires
          an appropriate form, we often combine tools and methods of all three
          areas to achieve the best result. Computer animation and VFX help to
          visualise complex processes, abstract issues or communicate products
          in an attractive way. Character animation focuses on telling a story,
          often humorous, and on the identification with the animated
          characters. In documentary and fiction film, our ambition is to tell
          the story of protagonists' lives and views in an authentic and
          socio-critical way, with a strong emotional impact.
        </p>
      </div>

      <div className="logos">
        <img src={logos} alt="" />
      </div>
      <BackButton className='back_btn' onClick={() => navigate(-1)} />
    </div>
  );
};

const ShowWorks = ({
  list_of_works,
  works_type_select,
  setworks_type_select,
}) => {
  const [avId, setAvId] = useState(1 + Math.random());
  useEffect(() => {
    setAvId(1 + Math.random());
  }, [works_type_select]);

  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".open_btn");
    console.log(buttons);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("hi");

        const content = button.parentElement.parentElement;
        if (content.classList.contains("active")) {
          content.classList.remove("active");
          console.log(content.classList);
        } else {
          content.classList.add("active");
          console.log(content.classList);
        }
      });
    });

    // });
  }, []);
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    const buttons1 = document.querySelectorAll(".open_btn_1");
    console.log(buttons1);

    buttons1.forEach((button1) => {
      button1.addEventListener("click", () => {
        console.log("hi");

        const content = button1.parentElement.parentElement.parentElement;
        if (content.classList.contains("active")) {
          content.classList.remove("active");
          console.log(content.classList);
        } else {
          content.classList.add("active");
          console.log(content.classList);
        }
      });
    });

    // });
  }, []);
  return (
    <div className="show_works">
      {/* {list_of_works.map((e) => (
        <h1>{e.title}</h1>
      ))} */}
      {list_of_works
        .filter((e, index) => e.type === works_type_select)
        .map((e, index) => (
          <div className="eachwork">
            <div className="image image_each_work">
              <img src={e.image} alt="" className="open_btn" />

              <svg
                // onClick={handleAddClass}
                className="open_btn"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <circle
                  opacity="0.6"
                  cx="36"
                  cy="36"
                  r="30"
                  fill="#9747FF"
                  stroke="#9747FF"
                />
                <path
                  d="M36.7071 21.2929C36.3166 20.9024 35.6834 20.9024 35.2929 21.2929L28.9289 27.6569C28.5384 28.0474 28.5384 28.6805 28.9289 29.0711C29.3195 29.4616 29.9526 29.4616 30.3431 29.0711L36 23.4142L41.6569 29.0711C42.0474 29.4616 42.6805 29.4616 43.0711 29.0711C43.4616 28.6805 43.4616 28.0474 43.0711 27.6569L36.7071 21.2929ZM37 50V22H35V50H37Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info">
              <div className="images">
                {e.more_images.length !== 0 && (
                  <svg
                    // onClick={handleAddClass}
                    className="open_btn_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <circle
                      opacity="0.6"
                      cx="36"
                      cy="36"
                      r="30"
                      fill="#9747FF"
                      stroke="#9747FF"
                    />
                    <path
                      d="M36.7071 21.2929C36.3166 20.9024 35.6834 20.9024 35.2929 21.2929L28.9289 27.6569C28.5384 28.0474 28.5384 28.6805 28.9289 29.0711C29.3195 29.4616 29.9526 29.4616 30.3431 29.0711L36 23.4142L41.6569 29.0711C42.0474 29.4616 42.6805 29.4616 43.0711 29.0711C43.4616 28.6805 43.4616 28.0474 43.0711 27.6569L36.7071 21.2929ZM37 50V22H35V50H37Z"
                      fill="white"
                    />
                  </svg>
                )}
                {e.more_images.map((e) => (
                  <div className="image">
                    <img src={e} alt="" />
                  </div>
                ))}
              </div>
              <div className="cont">
                <p>{e.title}</p>
                <p>{e.type_info}</p>
                <p>{e.more_info}</p>
              </div>
            </div>
          </div>
        ))}
      <BackButton className='back_btn'  onClick={() => setworks_type_select("")} />
    </div>
  );
};

export default Works;
