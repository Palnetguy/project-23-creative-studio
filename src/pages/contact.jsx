// import BackButton from "../components/back_button";
// import "../styles/contact.css";
// import work_bg from "../assets/vid/homebg-video.mp4";
// import Footer from "../components/footer";
// import Navbar from "../components/navbar";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useRef } from "react";

// const Contact = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     if (videoElement) {
//       // Ensure video plays in a loop
//       videoElement.addEventListener(
//         "ended",
//         function () {
//           this.currentTime = 0;
//           this.play();
//         },
//         false
//       );

//       // Play the video (with autoplay considerations)
//       videoElement.muted = true; // Mute video to comply with autoplay policies
//       videoElement.play().catch((error) => {
//         console.error("Error attempting to play video:", error);
//       });
//     }

//     // Cleanup event listener on component unmount
//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener("ended", function () {
//           this.currentTime = 0;
//           this.play();
//         });
//       }
//     };
//   }, []);

//   const navigate = useNavigate();
//   return (
//     <div className="contact">
//       <Navbar />
//       {/* <video src={work_bg} id="backGbW" autoplay loop muted playsinline></video> */}
//       <video
//         id="backGb"
//         ref={videoRef}
//         src={work_bg}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       <div className="cont_info">
//         <h1>CONTACT</h1>
//         <div className="info">
//           <p>Email : </p>
//           <ul>
//             <li>
//               <p>tina@projector23.de</p>
//             </li>
//             <li>
//               <p>martin@projector23.de</p>
//             </li>
//             <li>
//               <p>richard@projector23.de</p>
//             </li>
//           </ul>
//         </div>
//         <div className="info">
//           <p>Phone : </p>
//           <ul>
//             <li>
//               <p>+49 (0) 30 648 396 50</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="office_info">
//         <div className="container">
//           <p className="subtitle">Office</p>
//           <ul className="sublist">
//             <li>
//               <p>tina@projector23.de</p>
//             </li>
//             <li>
//               <p>martin@projector23.de</p>
//             </li>
//             <li>
//               <p>richard@projector23.de</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="linkedin_info">
//         <BackButton className="btn" onClick={() => navigate(-1)} />
//         <div className="container">
//           <p className="subtitle">Linkedln</p>
//           <ul className="sublist">
//             <li>
//               <a href="">Martina</a>
//             </li>
//             <li>
//               <a href="">Martin Kleinmichel</a>
//             </li>
//             <li>
//               <a href="">Richard Sako</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import work_bg from "../assets/vid/homebg-video.mp4";
import "../styles/contact.css";

const Contact = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Play video with autoplay and loop
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true; // Mute video to comply with autoplay policies
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
    <div className="contact">
      <Navbar />
      <video
        id="backGb"
        ref={videoRef}
        src={work_bg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="cont_info">
        <h1>CONTACT</h1>
        <div className="info">
          <p>Email : </p>
          <ul>
            <li><p>tina@projector23.de</p></li>
            <li><p>martin@projector23.de</p></li>
            <li><p>richard@projector23.de</p></li>
          </ul>
        </div>
        <div className="info">
          <p>Phone : </p>
          <ul>
            <li><p>+49 (0) 30 648 396 50</p></li>
          </ul>
        </div>
      </div>
      <div className="office_info">
        <div className="container">
          <p className="subtitle">Office</p>
          <ul className="sublist">
            <li><p>tina@projector23.de</p></li>
            <li><p>martin@projector23.de</p></li>
            <li><p>richard@projector23.de</p></li>
          </ul>
        </div>
      </div>
      <div className="linkedin_info">
        <BackButton className="btn" onClick={handleBackButtonClick} />
        <div className="container">
          <p className="subtitle">LinkedIn</p>
          <ul className="sublist">
            <li><a href="">Martina</a></li>
            <li><a href="">Martin Kleinmichel</a></li>
            <li><a href="">Richard Sako</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
