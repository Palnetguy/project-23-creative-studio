import './embeded_style.css';
const renderVideo = (vid_url) => {
    if (!vid_url || vid_url.length === 0) return null;

    return vid_url.map((url, index) => {
      let embedUrl;
      if (url.includes("vimeo.com")) {
        const vimeoId = url.split("/").pop();
        embedUrl = `https://player.vimeo.com/video/${vimeoId}`;
      } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const youtubeId = url.includes("youtube.com")
          ? new URLSearchParams(new URL(url).search).get("v")
          : url.split("/").pop();
        embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
      }

      return (
        <div key={index} className="video-container">
          <iframe
            src={embedUrl}
            style={{ width: '66vw', height: '60vh' }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={`Video ${index + 1}`}
          ></iframe>
        </div>
      );
    });
  };

export default renderVideo;