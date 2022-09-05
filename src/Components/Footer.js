import darkImage from "../Images/image-about-dark.jpg";
import lightImage from "../Images/image-about-light.jpg";


const Footer = () => {
  return (
    <footer>
      <div>
        <img src={darkImage} alt="" />
      </div>
      <div className="">
        <h3 className="h3">About our furniture</h3>
        <p className="p">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div>
        <img src={lightImage} alt=""/>
      </div>
    </footer>
  );
};

export default Footer;
