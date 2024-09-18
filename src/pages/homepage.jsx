import { lazy, useEffect, useRef, useCallback, Suspense } from "react";
import "../styles/homepage.css";

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
  useVideoLoop(videoRef);

  return (
    <div className="homepage">
      <Suspense fallback={<div style={{ minHeight: '400px' }} className="loading">Loading...</div>}>
        <Top videoRef={videoRef} />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '300px' }} className="loading">Loading more content...</div>}>
        <MoreContent />
      </Suspense>
    </div>
  );
};


export default Homepage;
