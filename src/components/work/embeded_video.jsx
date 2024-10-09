// import './embeded_style.css';

// const renderVideo = (vid_url) => {
//   if (!vid_url || vid_url.length === 0) return null;

//   const observeVideos = (videoElements) => {
//     const observer = new IntersectionObserver(
//       (entries, obs) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const iframe = entry.target.querySelector('iframe');
//             if (iframe && !iframe.src) {
//               iframe.src = iframe.getAttribute('data-src');
//             }
//             obs.unobserve(entry.target);
//           }
//         });
//       },
//       { rootMargin: '100px' }
//     );

//     videoElements.forEach((el) => observer.observe(el));
//   };

//   setTimeout(() => {
//     const videoContainers = document.querySelectorAll('.video-container');
//     observeVideos(videoContainers);
//   }, 0);

//   return vid_url.map((url, index) => {
//     let embedUrl;
//     if (url.includes('vimeo.com')) {
//       const vimeoId = url.split('/').pop();
//       embedUrl = `https://player.vimeo.com/video/${vimeoId}`;
//     } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
//       const youtubeId = url.includes('youtube.com')
//         ? new URLSearchParams(new URL(url).search).get('v')
//         : url.split('/').pop();
//       embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
//     }

//     return (
//       <div key={index} className="video-container">
//         <iframe
//           data-src={embedUrl}
//           frameBorder="0"
//           className="video-iframe"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           title={`Video ${index + 1}`}
//         ></iframe>
//       </div>
//     );
//   });
// };

// export default renderVideo;

import './embeded_style.css';

const renderVideo = (vid_url) => {
  if (!vid_url || vid_url.length === 0) return null;

  console.log("Rendering Videos:", vid_url);
  return vid_url.map((url, index) => {
    let embedUrl = '';

    if (url.includes('vimeo.com')) {
      const vimeoId = url.split('/').pop();
      embedUrl = `https://player.vimeo.com/video/${vimeoId}`;
    }
    else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const youtubeId = url.includes('youtube.com')
        ? new URLSearchParams(new URL(url).search).get('v')
        : url.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    }

    console.log(`Video ${index + 1} embed URL:`, embedUrl);

    if (!embedUrl) {
      console.error('Invalid video URL:', url);
      return null;
    }

    return (
      <div key={index} className="video-container">
        <iframe
          src={embedUrl}
          frameBorder="0"
          className="video-iframe"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={`Video ${index + 1}`}
        ></iframe>
      </div>
    );
  });
};

export default renderVideo;
