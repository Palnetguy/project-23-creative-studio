import { lazy, useEffect, useRef, useCallback } from "react";
import "../styles/homepage.css";
import useResponsive from "../utils/useResponsive";

const Top = lazy(() => import("../components/homepage/Top"));
const MoreContent = lazy(() => import("../components/homepage/MoreContent"));



const useVideoLoop = (videoRef) => {
  const handleEnded = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(error => 
        console.error("Error replaying video:", error)
      );
    }
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("ended", handleEnded);
    video.muted = true;
    video.play().catch(error => 
      console.error("Error playing video:", error)
    );

    return () => video.removeEventListener("ended", handleEnded);
  }, [handleEnded, videoRef]);
};

const Homepage = () => {
  const videoRef = useRef(null);
  const screenSize = useResponsive();
  useVideoLoop(videoRef);

  return (
    <div className="homepage" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <Top videoRef={videoRef} />
        <MoreContent />
    </div>
  );
};


export default Homepage;
