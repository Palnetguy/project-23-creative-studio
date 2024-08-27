import BackButton from "../components/back_button";
import "../styles/contact.css";
import work_bg from "../assets/vid/workbg-video.mp4";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Contact = () => {
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
    <div className="contact">
      <Navbar />
      <video src={work_bg} id="backGbW" autoplay loop muted playsinline></video>
      <div className="cont_info">
        <h1>CONTACT</h1>
        <div className="info">
          <p>Email : </p>
          <ul>
            <li>
              <p>tina@projector23.de</p>
            </li>
            <li>
              <p>martin@projector23.de</p>
            </li>
            <li>
              <p>richard@projector23.de</p>
            </li>
          </ul>
        </div>
        <div className="info">
          <p>Phone : </p>
          <ul>
            <li>
              <p>+49 (0) 30 648 396 50</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="office_info">
        <div className="container">
          <p className="subtitle">Office</p>
          <ul className="sublist">
            <li>
              <p>tina@projector23.de</p>
            </li>
            <li>
              <p>martin@projector23.de</p>
            </li>
            <li>
              <p>richard@projector23.de</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="linkedin_info">
        <BackButton className="btn" />
        <div className="container">
          <p className="subtitle">Linkedln</p>
          <ul className="sublist">
            <li>
              <a href="">Martina</a>
            </li>
            <li>
              <a href="">Martin Kleinmichel</a>
            </li>
            <li>
              <a href="">Richard Sako</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
