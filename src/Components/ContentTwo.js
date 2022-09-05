import image from "../Images/mobile-image-hero-2.jpg";
import desktopImage from "../Images/desktop-image-hero-2.jpg";
import arrow from "../Images/icon-arrow.svg";
import angleLeft from "../Images/icon-angle-left.svg";
import angleRight from "../Images/icon-angle-right.svg";

const ContentTwo = ({ forwardImage, visibility }) => {
  return (
    <div className="tab-3 contents" id="tab-2">
      <div className={`content-one ${visibility === 1 ? "show" : ""}`}>
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
      <div className={`content-two ${visibility === 1 ? "sliding" : ""}`}>
        <h3 className="h3"> We are available all across the globe</h3>
        <p className="p">
          With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locally, we’re in most major
          cities throughout the country. Find the branch nearest you using our
          store locator. Any questions? Don't hesitate to contact us today.
        </p>
        <button type="">
          shop now <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ContentTwo;
