import Navbar from "../components/navbar";
import "../styles/homepage.css";
import backGb from "../assets/vid/homebg-video.mp4";
import prof1 from "../assets/images/prof1.jpeg";
import prof2 from "../assets/images/prof2.jpeg";
import prof3 from "../assets/images/prof3.jpeg";
import prof4 from "../assets/images/prof4.jpeg";
import prof5 from "../assets/images/prof5.jpeg";
import prof6 from "../assets/images/prof6.jpeg";
import prof7 from "../assets/images/prof7.jpeg";
import prof8 from "../assets/images/prof8.jpeg";
import Footer from "../components/footer";

const Homepage = () => {
  window.addEventListener("load", function () {
    var newVideo = document.getElementById("backGb");
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
    <div className="homepage">
      <Top />
      <MoreContent />
    </div>
  );
};

const Top = () => {
  return (
    <div className="top">
      <Navbar />
      <div className="info">
        <div className="bgvid">
          <video
            src={backGb}
            id="backGb"
            autoplay
            loop
            muted
            playsinline
          ></video>
        </div>
        <div className="main">
          <h1>PROJECTOR 23</h1>
          <h1>CREATIVE STUDIO</h1>
        </div>

        <div className="moreIf">
          <p>
            Projector23 is a Berlin-based film production company, VFX studio
            and hub for innovative solutions. Since 2008 we create
            documentaries, fiction, animation and image films. We are constantly
            searching for fresh solutions with a character of its own, with a
            special interest in pressing social issues.
          </p>
          <p>
            Our feature film SUMMER REBELS was shortlisted for the 2021 German
            Film Award and won the German Film Critics' Award. It screened at
            numerous international film festivals and was theatrically released
            in Germany, Austria, the Czech Republic, and Slovakia. Discover our
            new film projects in the FILMS section.
          </p>
          <p>
            As service production we offer: Conceptual Framework | Storytelling
            | 2/3D, Fulldome, Animation, VFX, VR | Motion & AI Prompt Design |
            For more information we recommend you to visit our WORKS section or
            get in touch with us.
          </p>
        </div>
      </div>
    </div>
  );
};
const MoreContent = () => {
  return (
    <div className="more_content">
      <div className="preshow"></div>

      <h1 className="ourteam">OUR TEAM</h1>
      <div className="our_team">
        <div className="mber">
          <p>Martin kleinmichel</p>
          <div className="img">
            <img src={prof1} alt="" />
          </div>
          <p>Creative, Producer</p>
        </div>
        <div className="mber">
          <p>Martina Sakova</p>
          <div className="img">
            <img src={prof2} alt="" />
          </div>
          <p>Concept Development, Producer</p>
        </div>
        <div className="mber">
          <p>Richard Sako</p>
          <div className="img">
            <img src={prof3} alt="" />
          </div>
          <p>Animation, VFX</p>
        </div>
        <div className="mber">
          <p>Sülke Schulz</p>
          <div className="img">
            <img src={prof4} alt="" />
          </div>
          <p>Creative Writer</p>
        </div>
        <div className="mber">
          <p>Caou Reinbach</p>
          <div className="img">
            <img src={prof5} alt="" />
          </div>
          <p>Motion Design, VFX</p>
        </div>
        <div className="mber">
          <p>Nico Maehliss</p>
          <div className="img">
            <img src={prof6} alt="" />
          </div>
          <p>Technical Support, 3D Engineering</p>
        </div>
        <div className="mber">
          <p>Atari Sako Kleinmichel</p>
          <div className="img">
            <img src={prof7} alt="" />
          </div>
          <p>Trainee, Graphic Design, Handmade Illustration;)</p>
        </div>
        <div className="mber">
          <p>Melchior Sako</p>
          <div className="img">
            <img src={prof8} alt="" />
          </div>
          <p>Trainee, 3D Modelling & Game Design </p>
        </div>
      </div>

      <div className="btns">
        <div className="btn">WORK</div>
        <div className="btn">CONTACT</div>
      </div>

      <Footer />
    </div>
  );
};

// export default MainContent;

export default Homepage;
