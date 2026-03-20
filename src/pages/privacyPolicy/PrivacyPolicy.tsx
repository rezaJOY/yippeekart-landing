import { StoreContext } from "@/app/store/Store";
import "@/pages/termsConditions/termsAndConditions.css";
import { useContext } from "react";
const PrivacyPolicy = () => {
  //? @___Store Context___@
  const site = useContext(StoreContext);
  return (
    <div className="termsAndConditions">
      <div className="termsAndContionsTop">
        <div className="banner">
          <div className="bannerOverlay" />
          <div className="bannerImg">
            <img src="bannerImg.png" alt="" />
          </div>
          <div className="bannerContent">
            <div className="commonHeadingTitleTextWrapper">
              <p className="commonHeadingTitleText">Privacy policy</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="termsAndContionsBottom">
        <div className="container">
          <div
            className="termsAndContionsBottomInnerContent"
            dangerouslySetInnerHTML={{ __html: site.privacyAndPolicy }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
