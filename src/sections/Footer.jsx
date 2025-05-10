import { socialImgs } from "../constants";

const Footer = () => {
  // Social links data with URLs
  const socialLinks = [
    { imgPath: socialImgs[0].imgPath, url: "https://twitter.com/yourusername" },
    { imgPath: socialImgs[1].imgPath, url: "https://linkedin.com/in/yourusername" },
    { imgPath: socialImgs[2].imgPath, url: "https://github.com/yourusername" },
    // Add more as needed
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon"
            >
              <img src={social.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Samix Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;