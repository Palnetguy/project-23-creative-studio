import "../styles/footer.css"
import useResponsive from "../utils/useResponsive";

const Footer = () => {
  const screenSize=useResponsive()
  return (
    <footer className="footer" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <p>&copy;PROJECT23 CREATIVE STUDIO</p>
      <p className="rightelem" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>LAST UPDATE : JULY 2024</p>
    </footer>
  );
};

export default Footer;
