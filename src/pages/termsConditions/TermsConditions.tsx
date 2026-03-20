import { StoreContext } from "@/app/store/Store";
import { useContext } from "react";
import "./termsAndConditions.css";
const TermsConditions = () => {
  //? @___Store Context___@
  const site = useContext(StoreContext);
  return (
    <div className="termsAndConditions">
      <div className="termsAndContionsTop">
        <div className="banner">
          <div className="bannerOverlay" />
          <div className="bannerImg">
            <img src="assets/src/bannerImg.png" alt="" />
          </div>
          <div className="bannerContent">
            <div className="commonHeadingTitleTextWrapper">
              <p className="commonHeadingTitleText">Terms &amp; Conditions</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="termsAndContionsBottom">
        <div className="container">
          <div
            className="termsAndContionsBottomInnerContent"
            dangerouslySetInnerHTML={{ __html: site.termsAndCondition }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default TermsConditions;
