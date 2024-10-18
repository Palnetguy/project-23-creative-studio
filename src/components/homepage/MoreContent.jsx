import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import { teamMembers } from "./TeamData";
import useResponsive from "../../utils/useResponsive";

const TeamMember = ({ name, image, role }) => (
    <div className="mber">
      <p>{name}</p>
      <div className="img">
        <img src={image} alt={`${name} - ${role}`} />
      </div>
      <p>{role}</p>
    </div>
  );
  
  const MoreContent = () => {
    const screenSize= useResponsive()
    return (
      <div className="more_content"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="preshow"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></div>
  
        <h1 className="ourteam"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>OUR TEAM</h1>
        <div className="our_team"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
  
        <div className="btns"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          {['works', 'contact'].map((page) => (
            <Link key={page} to={`/${page}`} target="_top">
              <div className="btn"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{page.toUpperCase()}</div>
            </Link>
          ))}
        </div>
  
        <Footer />
      </div>
    );
  };

export default MoreContent;