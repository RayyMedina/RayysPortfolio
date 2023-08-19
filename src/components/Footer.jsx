import React from "react";
import { linkedIn, ghLogo, } from "../assets";
import { styles } from "../styles";

function Footer() {
  return (
    <>
      <div className="text-center">
        <p className={styles.heroSubText}>Links:</p>
      </div>
      <div className="row">
        <div className=" inset-0 flex justify-center m-3 card-img_hover">
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/raymondmedina2"
              )
            }
            className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer d-block mb-4 mx-3"
          >
            <img
              src={linkedIn}
              alt="source code"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/RayyMedina")}
            className="black-gradient w-12 h-12  rounded-full flex justify-center items-center cursor-pointer d-block mx-3"
          >
            <img
              src={ghLogo}
              alt="source code"
              className="w-16 h-16 object-contain"
            />
          </div>
          {/* <div
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile"
              )
            }
            className="black-gradient w-12 h-12  rounded-full flex justify-center items-center cursor-pointer d-block mx-3"
          >
            <img
              src={facebook}
              alt="source code"
              className="w-16 h-16 object-contain"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
