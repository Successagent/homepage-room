import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";

const Contents = ({ forwardImage, visibility }) => {
  return (
    <main>
      <div className="content-con">
        <ContentOne forwardImage={forwardImage} visibility={visibility} />
        <ContentTwo forwardImage={forwardImage} visibility={visibility} />
        <ContentThree forwardImage={forwardImage} visibility={visibility} />
      </div>
    </main>
  );
};

export default Contents;
