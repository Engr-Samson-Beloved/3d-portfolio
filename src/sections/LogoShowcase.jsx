import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} className="h-10 md:h-12 w-auto object-contain" />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:mt-10 mt-6 relative w-full">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-20">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
