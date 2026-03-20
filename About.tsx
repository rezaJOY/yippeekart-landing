import { StoreContext } from "@/app/store/Store";
import { useContext } from "react";
import "./about.css";
const About = () => {
  const site = useContext(StoreContext);
  return (
    <div className="aboutUsSection">
      <div className="aboutUsTop">
        <div className="banner">
          <div className="bannerOverlay" />
          <div className="bannerImg">
            <img src="bannerImg.png" alt="" />
          </div>
          <div className="bannerContent">
            <div className="commonHeadingTitleTextWrapper">
              <p className="commonHeadingTitleText">About us</p>
            </div>
             
          </div>
        </div>
      </div>
      <div className="aboutUsBottom">
        <div className="container">
          <div className="aboutUsBottomInnerContent">
            <div className="aboutLeftContent">
              <div dangerouslySetInnerHTML={{ __html: site.aboutUs }} />

              <div className="btnWrapper">
                <button type="button" className="btn">
                  Get The App
                  <span className="arrowRightIcon">
                    <svg
                      width={14}
                      height={9}
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.49478 0.740844C9.54673 0.688725 9.60846 0.647372 9.67643 0.619156C9.74439 0.59094 9.81726 0.576416 9.89085 0.576416C9.96443 0.576416 10.0373 0.59094 10.1053 0.619156C10.1732 0.647372 10.235 0.688725 10.2869 0.740844L13.6434 4.09737C13.6955 4.14932 13.7369 4.21105 13.7651 4.27901C13.7933 4.34698 13.8079 4.41984 13.8079 4.49343C13.8079 4.56702 13.7933 4.63988 13.7651 4.70785C13.7369 4.77581 13.6955 4.83754 13.6434 4.88949L10.2869 8.24602C10.2356 8.30093 10.1737 8.34494 10.105 8.37545C10.0363 8.40595 9.96212 8.42232 9.88696 8.42358C9.81179 8.42484 9.73714 8.41097 9.66745 8.38278C9.59775 8.35459 9.53444 8.31267 9.48129 8.25951C9.42813 8.20636 9.38621 8.14305 9.35802 8.07335C9.32983 8.00366 9.31596 7.92901 9.31722 7.85384C9.31848 7.77868 9.33485 7.70453 9.36535 7.63582C9.39586 7.56711 9.43987 7.50524 9.49478 7.45389L12.4558 4.49343L9.49418 1.53297C9.44206 1.48102 9.4007 1.41929 9.37249 1.35133C9.34427 1.28336 9.32975 1.2105 9.32975 1.13691C9.32975 1.06332 9.34427 0.990452 9.37249 0.922488C9.4007 0.854523 9.44206 0.792795 9.49418 0.740844H9.49478Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.380371 4.49245C0.380371 4.34413 0.439289 4.20189 0.544163 4.09702C0.649037 3.99215 0.791276 3.93323 0.93959 3.93323H12.6874C12.8358 3.93323 12.9781 3.99218 13.0831 4.09711C13.188 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.188 4.78346 13.0831 4.88839C12.9781 4.99332 12.8358 5.05227 12.6874 5.05227H0.93959C0.866101 5.05227 0.793333 5.03779 0.725446 5.00965C0.657559 4.9815 0.595884 4.94026 0.543948 4.88827C0.492012 4.83627 0.450833 4.77455 0.422765 4.70664C0.394697 4.63872 0.380292 4.56593 0.380371 4.49245Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="aboutRightContent">
              <div className="imageWrapper">
                <img src="image (1).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
