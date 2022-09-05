import image from "../Images/mobile-image-hero-1.jpg";
import desktopImage from "../Images/desktop-image-hero-1.jpg";
import arrow from "../Images/icon-arrow.svg";
import angleLeft from "../Images/icon-angle-left.svg";
import angleRight from "../Images/icon-angle-right.svg";

const ContentOne = ({ forwardImage, visibility }) => {
  return (
    <div className="tab-1 contents" id="tab-1">
      <div className={`content-one ${visibility === 0 ? "show" : ""}`}>
        <img className="dont-show-desktop" src={image} alt="" />
        <img className="dont-show-on-mobile" src={desktopImage} alt="" />
        <div>
          <div className="angle-con">
            <div>
              <img onClick={forwardImage} src={angleLeft} alt="" />
            </div>
            <div>
              <img onClick={forwardImage} src={angleRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`content-two ${visibility === 0 ? "sliding" : ""}`}>
        <h3 className="h3">Discover innovative ways to decorate</h3>
        <p className="p">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button type="">
          shop now <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ContentOne;
