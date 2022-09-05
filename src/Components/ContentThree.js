import image from "../Images/mobile-image-hero-3.jpg";
import desktopImage from "../Images/desktop-image-hero-3.jpg";
import arrow from "../Images/icon-arrow.svg";
import angleLeft from "../Images/icon-angle-left.svg";
import angleRight from "../Images/icon-angle-right.svg";

const ContentThree = ({ forwardImage, visibility }) => {
  return (
    <div className="tab-2 contents" id="tab-3">
      <div className={`content-one ${visibility === 2 ? "show" : ""}`}>
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
      <div className={`content-two ${visibility === 2 ? "show" : ""}`}>
        <h3 className="h3">Manufactured with the best materials</h3>
        <p className="p">
          Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
        <button type="">
          shop now <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ContentThree;
