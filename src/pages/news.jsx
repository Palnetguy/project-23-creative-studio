// import { useNavigate } from "react-router-dom";
// import BackButton from "../components/back_button";
// import Footer from "../components/footer";
// import Navbar from "../components/navbar";
// import "../styles/news.css";

// const News = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="news">
//       <Navbar />
//       <h1>News</h1>
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />

//       <BackButton onClick={() => navigate(-1)} />
//       <Footer />
//     </div>
//   );
// };

// const NewsTap = () => {
//   return (
//     <div className="news_tap">
//       <p className="title">Dailycreative</p>
//       <div className="info">
//         <div className="img"></div>
//         <div className="more">
//           <p>
//             Is a forward-thinking design agency specializing in the development
//             of innovative projects, including the cutting-edge Projector 23. Our
//             team combines creativity and technical expertise to deliver
//             exceptional design and development solutions that cater to the
//             unique needs of our clients. At DailyCreattive, we are committed to
//             pushing the boundaries of design, ensuring that every project we
//             undertake not only meets but exceeds our clients' expectations.
//             Projector 23 is a testament to our dedication to excellence and our
//             passion for creating impactful, user-centric designs.
//           </p>
//           <p>Directed by Alejandro Abdon</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

import { useNavigate } from "react-router-dom";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/news.css";
import React from "react";

const News = () => {
  const navigate = useNavigate();

  // Array to dynamically render NewsTap components
  const newsItems = Array(6).fill(null);

  return (
    <div className="news">
      <Navbar />
      <h1>News</h1>
      {newsItems.map((_, index) => (
        <NewsTap key={index} />
      ))}
      <BackButton onClick={() => navigate(-1)} />
      <Footer />
    </div>
  );
};


const NewsTap = React.memo(() => {
  return (
    <div className="news_tap">
      <p className="title">Dailycreative</p>
      <div className="info">
        <div className="img"></div>
        <div className="more">
          <p>
            Is a forward-thinking design agency specializing in the development
            of innovative projects, including the cutting-edge Projector 23. Our
            team combines creativity and technical expertise to deliver
            exceptional design and development solutions that cater to the
            unique needs of our clients. At DailyCreative, we are committed to
            pushing the boundaries of design, ensuring that every project we
            undertake not only meets but exceeds our clients' expectations.
            Projector 23 is a testament to our dedication to excellence and our
            passion for creating impactful, user-centric designs.
          </p>
          <p>Directed by Alejandro Abdon</p>
        </div>
      </div>
    </div>
  );
});

export default News;
