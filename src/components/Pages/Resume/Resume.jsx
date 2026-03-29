import img from "../../../Asset/cv.jpeg";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 pb-5">
        <img src={img} alt="" className="cv" />
        <a href={img} download="mhmd" className="download py-2 px-4 mt-4">
          Download
        </a>
      </div>
    </>
  );
};

export default Resume;
