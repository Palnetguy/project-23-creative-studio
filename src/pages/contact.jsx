import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import work_bg from "../assets/vid/homebg-video.mp4";
import "../styles/contact.css";
import useResponsive from "../utils/useResponsive";

const Contact = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const screenSize = useResponsive();

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  // Navigate to previous page
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="contact" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <Navbar  />
      <video
        id="backGb"
        ref={videoRef}
        src={work_bg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="cont_info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <h1>CONTACT</h1>
        <div className="info"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <p>Email : </p>
          <ul>
            <li><p>tina@projector23.de</p></li>
            <li><p>martin@projector23.de</p></li>
            <li><p>richard@projector23.de</p></li>
          </ul>
        </div>
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <p>Phone : </p>
          <ul>
            <li><p>+49 (0) 30 648 396 50</p></li>
          </ul>
        </div>
      </div>
      <div className="office_info"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="container" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <p className="subtitle" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Office</p>
          <ul className="sublist"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <p>PROJECTOR23 GmbH & Co.KG<br/> Kiefholzstr.2<br/>12435 Berlin Germany</p>
            {/* <li><p>tina@projector23.de</p></li>
            <li><p>martin@projector23.de</p></li>
            <li><p>richard@projector23.de</p></li> */}
          </ul>
        </div>
      </div>
      <div className="linkedin_info"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <BackButton className="btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }} onClick={handleBackButtonClick} />
        <div className="container"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <p className="subtitle"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>LinkedIn</p>
          <ul className="sublist"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <li><a href="/#">Martina Sakova</a></li>
            <li><a href="/#">Martin Kleinmichel</a></li>
            <li><a href="/#">Richard Sako</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
