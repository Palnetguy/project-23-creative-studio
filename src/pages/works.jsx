import Navbar from "../components/navbar";
import "../styles/works.css";
import logos from "../assets/images/logos.png";
import testIm from "../assets/images/img3.jpeg";
import fic_work from "../assets/images/fic_work.jpg";
import docum_im from "../assets/images/docum_im.jpg";
import char_anim from "../assets/images/char_anim.jpg";
import inov_img from "../assets/images/inov_img.jpg";
import sci_img from "../assets/images/sci_img.jpg";
import work_bg from "../assets/vid/workbg-video.mp4";
import { useEffect, useState } from "react";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Works = () => {
  //   var works_type_select = "Fiction Films";

  const [works_type_select, setworks_type_select] = useState("");
  //   const [works_type_selectnext, setworks_type_selectnext] = useState("");
  const list_of_works = [
    {
      type: "Fiction Films",
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: testIm,
    },
    {
      type: "Scientific Animation",
      title: "HISTORY OF SURVIVAL",
      type_info: "Animation for science show TERRA X, broadcaster ZDF / arte",
      more_info: "Client: UFA documentary",
      image: testIm,
    },
    {
      type: "Character Animation",
      title: "HEAVY MENTAL",
      type_info: "Animated short film, German-Slovak coproduction",
      more_info:
        "Imagine getting kicked out of school and your best friend just became possessed by the devil. Can it get any worse?! Yes, it can...",
      image: testIm,
    },
    {
      type: "Documentaries",
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: testIm,
    },
    {
      type: "Innovative Solutions",
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

  window.addEventListener("load", function () {
    var newVideo = document.getElementById("backGbW");
    newVideo.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );

    newVideo.play();
  });

  return (
    <div className="works">
      {/* <video src={work_bg} className="work_bg" id="backGbW" autoPlay></video> */}
      <video src={work_bg} id="backGbW" autoplay loop muted playsinline></video>
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
              works_type_select == "Fiction Films" ? "active" : ""
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
              works_type_select == "Scientific Animation" ? "active" : ""
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
              works_type_select == "Character Animation" ? "active" : ""
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
              works_type_select == "Documentaries" ? "active" : ""
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
              works_type_select == "Innovative Solutions" ? "active" : ""
            }`}
          >
            <p>Innovative Solutions</p>
          </div>
        </div>
      </div>

      {works_type_select != "" && (
        <ShowWorks
          list_of_works={list_of_works}
          works_type_select={works_type_select}
          setworks_type_select={setworks_type_select}
        />
      )}

      {works_type_select == "" && <WorksInfo />}

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
      <BackButton onClick={() => navigate(-1)} />
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
    const butttons = document.querySelectorAll(".open_btn");
    console.log(butttons);

    butttons.forEach((button) => {
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
        //   console.log(content);
      });
    });
    // });
  }, [avId]);

  return (
    <div className="show_works">
      {/* {list_of_works.map((e) => (
        <h1>{e.title}</h1>
      ))} */}
      {list_of_works
        .filter((e, index) => e.type === works_type_select)
        .map((e, index) => (
          <div className="eachwork" key={avId}>
            <div className="image">
              <img src={testIm} alt="" />

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
                  r="35.5"
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
              <div className="cont">
                <p>{e.title}</p>
                <p>{e.type_info}</p>
                <p>{e.more_info}</p>
              </div>
            </div>
          </div>
        ))}
      <BackButton onClick={() => setworks_type_select("")} />
    </div>
  );
};

export default Works;
