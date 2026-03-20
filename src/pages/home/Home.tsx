import { StoreContext } from "@/app/store/Store";
import { useContext } from "react";
import "./banner.css";
import "./benifits.css";
import "./brands.css";
import "./hero.css";
const Home = () => {
  const site = useContext(StoreContext);
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="heroArea">
            <div className="heroColLeft">
              <div className="heroColLeftContent">
                <div className="heroSubTitleWrapper">
                  <div
                    className="heroSubTitle"
                    dangerouslySetInnerHTML={{ __html: site.subTitle }}
                  ></div>
                </div>
                <div className="heroTitleWraper">
                  <div
                    className="heroTitle"
                    dangerouslySetInnerHTML={{ __html: site.title }}
                  ></div>
                </div>
                <div className="heroDescriptionTextWrapper">
                  <p
                    className="heroDescriptionText"
                    dangerouslySetInnerHTML={{ __html: site.description }}
                  ></p>
                </div>
                <div className="btnGroups">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.yippeekart.app"
                    target="_blank"
                  >
                    <img src="icon-play-store.png" alt="" />
                  </a>
                  <a href="">
                    <img src="icon-app-store.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="heroColRight">
              <div className="imageWrapper">
                {/* <img src="Screenshot_7.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benifitSection">
        <div className="container">
          <div className="benifitsWrapper">
            <div className="benifitCard">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group.png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">
                    Discover the essential side of using the App.{" "}
                  </p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    Here's why it's the perfect choice for your online shopping
                    needs
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="benifitCard card">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group.png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">Seamless Shopping Experience</p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    The yippeekart app is designed to provide you with a smooth
                    and intuitive shopping experience. Easily navigate through
                    our extensive product catalogue, find exactly what you're
                    looking for, and make your purchase with just a few taps.
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="benifitCard card">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group (2).png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">Exclusive App-Only Deals</p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    Get access to exclusive deals and discounts that are only
                    available on the yippeekart app. Enjoy special promotions
                    and limited-time offers that will save you money on your
                    favourite products.
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="benifitCard card">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group (3).png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">
                    Secure and Convenient Payments:
                  </p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    Our app offers secure payment options, allowing you to
                    complete your transactions with peace of mind. Choose from a
                    variety of payment methods, including credit/debit cards,
                    mobile wallets, and cash on delivery, to suit your
                    preferences
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="benifitCard card">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group.png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">Easy Returns and Refunds</p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    In case you need to return or exchange a product, the app
                    allows for a hassle-free process. Simply follow the
                    guidelines and request a return within the specified time
                    period for a seamless return and refund experience.
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="benifitCard card">
              <div className="cardInner">
                <div className="cardIconWrapper">
                  <span className="cardIcon">
                    <img src="Mask group.png" alt="" />
                  </span>
                </div>
                <div className="cardTitleTextWrapper">
                  <p className="cardTitleText">
                    Order Tracking and Notifications
                  </p>
                </div>
                <div className="cardDescriptionTextWrapper">
                  <p className="cardDescriptionText">
                    Stay updated on the status of your orders with real-time
                    tracking. Receive notifications on order confirmations,
                    dispatch, and delivery, so you're always informed about the
                    progress of your purchases.
                  </p>
                </div>
                <div className="btnWrapper">
                  <button type="button" className="btn">
                    Discover the features today
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49463 0.740844C9.54658 0.688725 9.60831 0.647372 9.67627 0.619156C9.74424 0.59094 9.8171 0.576416 9.89069 0.576416C9.96428 0.576416 10.0371 0.59094 10.1051 0.619156C10.1731 0.647372 10.2348 0.688725 10.2868 0.740844L13.6433 4.09737C13.6954 4.14932 13.7368 4.21105 13.765 4.27901C13.7932 4.34698 13.8077 4.41984 13.8077 4.49343C13.8077 4.56702 13.7932 4.63988 13.765 4.70785C13.7368 4.77581 13.6954 4.83754 13.6433 4.88949L10.2868 8.24602C10.2354 8.30093 10.1735 8.34494 10.1048 8.37545C10.0361 8.40595 9.96197 8.42232 9.88681 8.42358C9.81164 8.42484 9.73699 8.41097 9.66729 8.38278C9.5976 8.35459 9.53429 8.31267 9.48113 8.25951C9.42797 8.20636 9.38605 8.14305 9.35787 8.07335C9.32968 8.00366 9.31581 7.92901 9.31706 7.85384C9.31832 7.77868 9.33469 7.70453 9.3652 7.63582C9.3957 7.56711 9.43972 7.50524 9.49463 7.45389L12.4557 4.49343L9.49402 1.53297C9.4419 1.48102 9.40055 1.41929 9.37233 1.35133C9.34412 1.28336 9.32959 1.2105 9.32959 1.13691C9.32959 1.06332 9.34412 0.990452 9.37233 0.922488C9.40055 0.854523 9.4419 0.792795 9.49402 0.740844H9.49463Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.38028 4.49245C0.38028 4.34413 0.439197 4.20189 0.544071 4.09702C0.648945 3.99215 0.791184 3.93323 0.939498 3.93323H12.6873C12.8357 3.93323 12.978 3.99218 13.083 4.09711C13.1879 4.20204 13.2469 4.34436 13.2469 4.49275C13.2469 4.64114 13.1879 4.78346 13.083 4.88839C12.978 4.99332 12.8357 5.05227 12.6873 5.05227H0.939498C0.86601 5.05227 0.793242 5.03779 0.725355 5.00965C0.657468 4.9815 0.595793 4.94026 0.543857 4.88827C0.49192 4.83627 0.450741 4.77455 0.422674 4.70664C0.394606 4.63872 0.3802 4.56593 0.38028 4.49245Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerSection">
        <div className="container">
          <div className="bannerArea">
            <div className="bannerMainContent">
              <div className="bannerTitleWrapper">
                <p
                  className="bannerTitle"
                  dangerouslySetInnerHTML={{ __html: site.bannerTitle }}
                ></p>
              </div>
              <div className="bannerBodyContent">
                <div className="barCodeWrapper">
                  <div className="barCode">
                    <img src="barCode.png" alt="" />
                  </div>
                </div>
                <div className="bannerDescWrapper">
                  <p
                    className="bannerDescText"
                    dangerouslySetInnerHTML={{ __html: site.bannerDescription }}
                  ></p>
                </div>
              </div>
              <div className="bannerBtnGroups">
                <a
                  href="https://play.google.com/store/apps/details?id=com.yippeekart.app"
                  target="_blank"
                >
                  <img src="icon-play-store.png" alt="" />
                </a>
                <a href="#">
                  <img src="icon-app-store.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brandSection">
        <div className="brandWrapper">
          <div className="brandContent">
            <div className="brandContentInner">
              <div className="brandTitleTextWrapper">
                <h2 className="brandTitleText">Our Best Seller By Brand</h2>
              </div>

              <div className="btnWrapper">
                <button type="button" className="btn">
                  Explore The App
                  <span>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.59787 0.740806C9.64982 0.688687 9.71155 0.647334 9.77951 0.619118C9.84748 0.590902 9.92034 0.576378 9.99393 0.576378C10.0675 0.576378 10.1404 0.590902 10.2084 0.619118C10.2763 0.647334 10.338 0.688687 10.39 0.740806L13.7465 4.09733C13.7986 4.14928 13.84 4.21101 13.8682 4.27897C13.8964 4.34694 13.9109 4.4198 13.9109 4.49339C13.9109 4.56698 13.8964 4.63985 13.8682 4.70781C13.84 4.77578 13.7986 4.8375 13.7465 4.88945L10.39 8.24598C10.3386 8.30089 10.2768 8.34491 10.2081 8.37541C10.1394 8.40592 10.0652 8.42229 9.99005 8.42354C9.91488 8.4248 9.84023 8.41093 9.77053 8.38274C9.70084 8.35455 9.63753 8.31263 9.58437 8.25948C9.53122 8.20632 9.4893 8.14301 9.46111 8.07331C9.43292 8.00362 9.41905 7.92897 9.42031 7.8538C9.42156 7.77864 9.43793 7.70449 9.46844 7.63578C9.49894 7.56707 9.54296 7.5052 9.59787 7.45385L12.5589 4.49339L9.59726 1.53293C9.54514 1.48098 9.50379 1.41925 9.47558 1.35129C9.44736 1.28332 9.43284 1.21046 9.43284 1.13687C9.43284 1.06328 9.44736 0.990414 9.47558 0.92245C9.50379 0.854485 9.54514 0.792757 9.59726 0.740806H9.59787Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.483521 4.4924C0.483521 4.34409 0.542438 4.20185 0.647312 4.09698C0.752186 3.9921 0.894425 3.93319 1.04274 3.93319H12.7906C12.939 3.93319 13.0813 3.99213 13.1862 4.09707C13.2911 4.202 13.3501 4.34431 13.3501 4.49271C13.3501 4.6411 13.2911 4.78342 13.1862 4.88835C13.0813 4.99328 12.939 5.05223 12.7906 5.05223H1.04274C0.969251 5.05223 0.896483 5.03774 0.828596 5.0096C0.760709 4.98146 0.699034 4.94022 0.647098 4.88822C0.595161 4.83623 0.553982 4.77451 0.525915 4.70659C0.497847 4.63868 0.483441 4.56589 0.483521 4.4924Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="brandLogoGroups">
            <div className="brandLogos">
              <div className="cardLogo">
                <img src="adidas-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="apple-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="fresh-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="png-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="pran-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="samsung-yippeekart.png" alt="" />
              </div>
              <div className="cardLogo">
                <img src="image 30.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
