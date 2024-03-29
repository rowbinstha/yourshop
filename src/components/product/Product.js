import React from 'react'
import Footer from '../navfoot/Footer'
import banner1 from "../../assets/img/img-banner.png"
import promo1 from "../../assets/img/promo-1.png"
import promo2 from "../../assets/img/promo-2.png"
import promo3 from "../../assets/img/promo-3.png"
import promo4 from "../../assets/img/promo-4.png"
import promo5 from "../../assets/img/promo-5.png"
import aboutus from "../../assets/img/aboutus.png"
import aboutus2 from "../../assets/img/sale-shape-red.png"
import ctaimg from "../../assets/img/Image-cta.jpg"
import gallery1 from "../../assets/img/banner-1.jpg"
import gallery2 from "../../assets/img/banner-2.jpg"
import gallery3 from "../../assets/img/banner-3.jpg"
import gallery4 from "../../assets/img/banner-4.jpg"

export default function Product() {
   
  return (
      <><article>
      {/* banner principal */}
      <section className="banner backimg1" id="start" >
          <div className="container">
              <div className="banner-content">
                  <p className="banner-subtitle">From your favorite restaurant</p>
                  <h2 className="h1 banner-title">The food you already know at the best price!</h2>
                  <p className="banner-text">Food is any substance consumed to provide nutritional support to an organism.</p>
                  <button className="btn">Book a table</button>
              </div>
              <figure className="banner-img">
                  <img src={banner1} width="700" height="637"  loading="lazy" alt="img" className="w-100 img-er"/>
              </figure>
          </div>
      </section>

      {/*   promotions */}
      <section className="section section-divider white promo">
          <div className="container">
              <ul className=" has-scrollbar">
                  <li className="promo-item">
                      <div className="promo-card">
                          <div className="card-icon">
                              <svg width="50" height="50" viewBox="0 0 40 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20 0C27.3632 0 34.286 2.82475 39.4925 7.95376C39.9751 8.42914 40.0954 9.15503 39.7917 9.75717L21.4222 46.1323C21.1537 46.6639 20.6029 47 20.0002 47C19.3974 47 18.8466 46.6639 18.5782 46.1323L0.208689 9.75717C-0.0954073 9.15503 0.0249139 8.4293 0.507484 7.95376C5.71407 2.82475 12.6366 0 20 0ZM36.4267 9.39462C31.9253 5.34581 26.1354 3.12906 20 3.12906C13.8646 3.12906 8.07471 5.34581 3.57351 9.39446L4.80242 11.8283C8.99809 8.15869 14.3422 6.15194 20.0002 6.15194C25.6578 6.15194 31.0019 8.15869 35.1978 11.8282L36.4267 9.39462ZM10.7171 23.3106C10.6729 23.2973 10.6286 23.2872 10.5843 23.2778L8.30877 18.7718C8.60066 17.8741 9.22331 17.136 10.0702 16.6928C10.9316 16.2411 11.9202 16.1477 12.8537 16.4285C13.7867 16.7092 14.5523 17.3313 15.0105 18.1798C15.4683 19.0285 15.5634 20.0022 15.2776 20.9218C14.9926 21.8409 14.3613 22.5954 13.5001 23.0468C12.6384 23.4979 11.65 23.5916 10.7171 23.3106ZM12.2537 26.5835L20 41.9229L23.9669 34.0679C23.7399 34.0929 23.5096 34.107 23.2758 34.107C19.8713 34.107 17.1017 31.3786 17.1017 28.0248C17.1017 24.671 19.8715 21.9427 23.2758 21.9427C25.5311 21.9427 27.507 23.1408 28.5844 24.9239L33.7239 14.7469C30.0222 11.2202 25.1627 9.281 20.0002 9.281C14.8374 9.281 9.97785 11.2203 6.27632 14.7471L6.63246 15.4522C7.17383 14.8397 7.82893 14.3227 8.57881 13.9299C10.1899 13.0861 12.0376 12.9109 13.7819 13.436C15.5263 13.9611 16.9586 15.1243 17.8151 16.7113C18.6712 18.2982 18.8487 20.1184 18.315 21.8368C17.7823 23.5548 16.6019 24.9659 14.9912 25.8096C14.1293 26.261 13.1992 26.5199 12.2537 26.5835ZM23.2758 30.9779C21.6228 30.9779 20.2782 29.6532 20.2782 28.0248C20.2782 26.3964 21.6228 25.0717 23.2758 25.0717C24.9289 25.0717 26.2736 26.3964 26.2736 28.0248C26.2736 29.6532 24.9289 30.9779 23.2758 30.9779ZM27.8617 18.618C27.4553 18.618 27.0489 18.4653 26.7386 18.1597L24.1181 15.5784C23.4978 14.9675 23.4978 13.9767 24.1181 13.3657C24.7383 12.755 25.7438 12.755 26.364 13.3657L28.9848 15.9472C29.6048 16.5581 29.6048 17.5489 28.9848 18.1597C28.6744 18.4651 28.2681 18.618 27.8617 18.618Z"
                                      fill="currentColor" />
                              </svg>
                          </div>
                          <h3 className="h3 card-title">Pizza </h3>
                          <p className="card-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                          <img className=" w-100 card-img" src={promo1} loading="lazy" width="300" height="300" alt="promo-1"/>
                      </div>
                  </li>

                  <li className="promo-item">
                      <div className="promo-card">
                          <div className="card-icon">
                              <svg width="50" height="50" viewBox="0 0 48 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                      d="M47.6096 13.0497C47.1677 12.3506 46.2366 12.138 45.5299 12.575L30.4086 21.9254V16.6478C30.4086 14.8594 29.1497 13.2583 26.8467 12.0908L39.7522 2.72733C40.4242 2.23952 40.5695 1.30533 40.0768 0.640314C39.5834 -0.0250242 38.639 -0.16861 37.9672 0.31904L23.4224 10.872C21.6743 10.4513 19.7183 10.2274 17.6943 10.2274C14.4949 10.2274 11.4631 10.7855 9.15833 11.7992C6.46373 12.9839 4.98024 14.7057 4.98024 16.6476V24.2527L0.61675 27.4186C-0.0554109 27.9065 -0.2007 28.8408 0.292186 29.5058C0.587918 29.9047 1.04601 30.116 1.51039 30.116C1.82013 30.116 2.13262 30.0218 2.40161 29.8269L4.98008 27.9562V28.6229C4.98008 30.5648 6.46373 32.2865 9.15801 33.4714C9.66233 33.6931 10.2029 33.8916 10.771 34.0685L5.68929 37.211C4.9825 37.6481 4.76762 38.5692 5.20929 39.2685C5.49568 39.7217 5.98743 39.9704 6.49063 39.9704C6.76365 39.9704 7.04037 39.897 7.28891 39.7433L15.0955 34.916C15.9415 34.999 16.811 35.043 17.6943 35.043C20.8937 35.043 23.9253 34.4848 26.2305 33.4714C28.9248 32.2865 30.4085 30.5648 30.4085 28.6229V25.4472L47.1294 15.1076C47.8362 14.6701 48.0511 13.7492 47.6096 13.0497ZM17.6943 13.2137C23.5232 13.2137 27.3903 15.2806 27.3903 16.6478C27.3903 18.0148 23.5231 20.0819 17.6943 20.0819C11.8655 20.0819 7.99828 18.0148 7.99828 16.6478C7.99828 15.2805 11.8655 13.2137 17.6943 13.2137ZM7.99828 20.9101V28.6226C7.99828 29.7119 10.4555 31.2446 14.4026 31.8228L27.3903 23.7915V20.9101C27.033 21.1174 26.6464 21.3133 26.2305 21.4959C23.9253 22.5095 20.8937 23.0677 17.6943 23.0677C14.4949 23.0677 11.4635 22.5095 9.15817 21.4959C8.74228 21.3131 8.35554 21.1174 7.99828 20.9101ZM27.3903 28.6226C27.3903 29.8102 24.4708 31.5253 19.8833 31.9552L27.3903 27.3131V28.6226ZM17.6943 18.8263C16.7546 18.8263 15.855 18.7423 15.1614 18.59C13.4299 18.2092 13.0663 17.3237 13.0663 16.6478C13.0663 15.9718 13.4297 15.0862 15.1614 14.7053C15.855 14.5528 16.7544 14.469 17.6943 14.469C18.6343 14.469 19.5337 14.5528 20.2272 14.7053C21.9589 15.0861 22.3224 15.9718 22.3224 16.6478C22.3224 17.3237 21.9587 18.2092 20.2272 18.59C19.5337 18.7423 18.6341 18.8263 17.6943 18.8263Z"
                                      fill="currentColor" />
                              </svg>

                          </div>
                          <h3 className="h3 card-title">Sushi</h3>
                          <p className="card-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                          <img className=" w-100 card-img" src={promo2} loading="lazy" width="300" height="300" alt="promo-1"/>
                      </div>
                  </li>

                  <li className="promo-item">
                      <div className="promo-card">
                          <div className="card-icon">
                              <svg width="50" height="50" viewBox="0 0 47 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                      d="M44.1618 12.3855C45.8301 13.05 47 14.5729 47 16.3418C47 17.383 46.5949 18.339 45.9214 19.0848C46.5949 19.8307 47 20.787 47 21.8282C47 23.4423 46.0255 24.8516 44.5873 25.5905V28.3676C44.5873 31.4083 42.1144 33.8824 39.0747 33.8824H7.92528C4.88563 33.8824 2.41267 31.4084 2.41267 28.3676V25.5905C0.974498 24.8516 0 23.4423 0 21.8282C0 20.787 0.405118 19.8307 1.07863 19.0849C0.405118 18.339 0 17.383 0 16.3418C0 14.5729 1.17009 13.0497 2.83804 12.3855C2.50366 11.8629 2.49844 11.1696 2.87982 10.6327C7.55671 4.04871 15.2653 0.117676 23.5 0.117676C31.7342 0.117676 39.4425 4.04823 44.1199 10.6324C44.5016 11.1693 44.496 11.8632 44.1618 12.3855ZM42.2905 23.0025C43.1267 23.0025 43.8603 22.4536 43.8603 21.8282C43.8603 21.2024 43.1267 20.6537 42.2905 20.6535H25.5329L23.1822 23.0025H42.2905ZM15.8162 25.9262L10.5402 20.6535L21.0924 20.6538L15.8162 25.9262ZM3.13966 21.8282C3.13966 22.4536 3.87331 23.0025 4.70949 23.0025H8.4505L6.09987 20.6535H4.70949C3.87331 20.6535 3.13966 21.2024 3.13966 21.8282ZM4.70949 17.5162C3.87331 17.5162 3.13966 16.9676 3.13966 16.3418C3.13966 15.7161 3.87331 15.1672 4.70949 15.1672H42.2905C43.1267 15.1672 43.8603 15.7161 43.8603 16.3418C43.8603 16.9676 43.1267 17.5162 42.2905 17.5162H4.70949ZM41.2524 12.0297C37.137 6.52612 30.5416 3.25516 23.5002 3.25516C16.4582 3.25516 9.86272 6.52644 5.74745 12.0297H41.2524ZM7.92528 30.7449C6.61687 30.7449 5.55233 29.6787 5.55233 28.3676V26.14H11.5902L14.7063 29.2539C15.0129 29.5604 15.4146 29.7135 15.8164 29.7135C16.218 29.7135 16.6198 29.5603 16.9265 29.2539L20.0427 26.14H41.4478V28.3676C41.4477 29.6787 40.383 30.7449 39.0747 30.7449H7.92528ZM24.3332 9.56272C24.1134 9.78237 23.8103 9.90778 23.4995 9.90778C23.1901 9.90778 22.8873 9.78237 22.6674 9.56272C22.4476 9.34275 22.3222 9.04007 22.3222 8.73122C22.3222 8.42048 22.4476 8.1178 22.6674 7.89814C22.8873 7.68007 23.1901 7.55466 23.4995 7.55466C23.8103 7.55466 24.1134 7.68007 24.3332 7.89814C24.5514 8.1178 24.6771 8.42048 24.6771 8.73122C24.6771 9.04007 24.5514 9.34275 24.3332 9.56272ZM20.0413 6.32497C20.3521 6.32497 20.6552 6.19925 20.8732 5.97959C21.0932 5.75994 21.2187 5.45726 21.2187 5.14809C21.2187 4.83735 21.0932 4.53467 20.8732 4.31502C20.6552 4.09694 20.3521 3.97154 20.0413 3.97154C19.7303 3.97154 19.4275 4.09694 19.2092 4.31502C18.9894 4.53467 18.8638 4.83735 18.8638 5.14809C18.8638 5.45726 18.9894 5.75994 19.2092 5.97959C19.4275 6.19925 19.7303 6.32497 20.0413 6.32497ZM27.7916 5.97959C27.5718 6.19925 27.2687 6.32497 26.9579 6.32497C26.6485 6.32497 26.3455 6.19925 26.1258 5.97959C25.906 5.75994 25.7804 5.45726 25.7804 5.14809C25.7804 4.83735 25.906 4.53467 26.1258 4.31502C26.3456 4.09694 26.6487 3.97154 26.9579 3.97154C27.2687 3.97154 27.5718 4.09694 27.7916 4.31502C28.0098 4.53467 28.137 4.83735 28.137 5.14809C28.137 5.45726 28.0098 5.75994 27.7916 5.97959ZM13.123 9.90778C13.4339 9.90778 13.7368 9.78237 13.9566 9.56272C14.1749 9.34275 14.3003 9.04007 14.3003 8.73122C14.3003 8.42048 14.1749 8.1178 13.9566 7.89814C13.7368 7.68007 13.4339 7.55466 13.123 7.55466C12.8138 7.55466 12.5109 7.68007 12.2909 7.89814C12.0712 8.1178 11.9454 8.42048 11.9454 8.73122C11.9454 9.04007 12.0712 9.34275 12.2909 9.56272C12.5109 9.78237 12.8138 9.90778 13.123 9.90778ZM34.7097 9.56272C34.4898 9.78237 34.1869 9.90778 33.8759 9.90778C33.5667 9.90778 33.2638 9.78237 33.044 9.56272C32.824 9.34464 32.6985 9.04007 32.6985 8.73122C32.6985 8.42048 32.824 8.1178 33.044 7.89814C33.2638 7.68007 33.5665 7.55466 33.8759 7.55466C34.1853 7.55466 34.4898 7.68007 34.7097 7.89814C34.9278 8.1178 35.0535 8.42048 35.0535 8.73122C35.0535 9.04007 34.9278 9.34275 34.7097 9.56272Z"
                                      fill="currentColor" />
                              </svg>
                          </div>
                          <h3 className="h3 card-title">Burgers</h3>
                          <p className="card-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                          <img className=" w-100 card-img" src={promo3} loading="lazy" width="300" height="300" alt="promo-1"/>
                      </div>
                  </li>

                  <li className="promo-item">
                      <div className="promo-card">
                          <div className="card-icon">
                              <svg width="50" height="50" viewBox="0 0 46 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                      d="M29.1605 5.59126H44.2234C45.1579 5.59126 45.9156 6.34991 45.9153 7.28547C45.9153 8.2212 45.1576 8.97985 44.2231 8.97985H29.1602V14.7632C30.3584 14.2582 31.6733 13.978 33.0528 13.978C38.5588 13.978 43.0438 18.4248 43.1194 23.9189C43.4637 24.2289 43.6813 24.6772 43.6813 25.1771C43.6813 37.2104 33.9026 46.9998 21.883 46.9998C9.86313 46.9998 0.0844116 37.2104 0.0844116 25.1771C0.0844116 24.6772 0.302082 24.2289 0.64637 23.9189C0.721772 18.4249 5.20717 13.978 10.7129 13.978C12.0928 13.978 13.4073 14.2595 14.6056 14.7651V8.97985H13.5055C12.571 8.97985 11.813 8.2212 11.813 7.28547C11.813 6.34991 12.571 5.59126 13.5055 5.59126H14.6056V3.38859H13.5055C12.571 3.38859 11.813 2.62994 11.813 1.69422C11.813 0.758646 12.571 0 13.5055 0H44.2234C45.1579 0 45.9156 0.758646 45.9156 1.69422C45.9156 2.62994 45.1579 3.38859 44.2234 3.38859H29.1605V5.59126ZM23.5754 5.59126H25.7758V3.38859H23.5754V5.59126ZM17.9906 3.38859H20.1907V5.59126H17.9906V3.38859ZM20.1905 13.0114V8.97985H17.9904V13.6107C18.6913 13.3368 19.4273 13.1329 20.1905 13.0114ZM32.6197 23.4831C32.6178 23.3399 32.6151 23.1966 32.6077 23.0548C32.7441 22.9938 32.8943 22.9578 33.0531 22.9578C33.4486 22.9578 33.795 23.1686 33.9889 23.4831H32.6197ZM26.5855 23.4831H29.2345C29.1564 19.49 25.8896 16.2653 21.8832 16.2655C17.8763 16.2655 14.6095 19.4901 14.5314 23.4831H17.18C17.2963 20.9867 19.3613 18.9915 21.883 18.9915C24.4048 18.9915 26.4691 20.9868 26.5855 23.4831ZM23.1864 23.4831H20.5797C20.6856 22.858 21.2289 22.3801 21.8832 22.3801C22.537 22.3801 23.0801 22.8578 23.1864 23.4831ZM9.77713 23.4831H11.1464C11.1484 23.3391 11.151 23.1955 11.1584 23.0533C11.0223 22.9925 10.8716 22.9578 10.7129 22.9578C10.3174 22.9578 9.97109 23.1686 9.77713 23.4831ZM10.7129 17.3666C11.4804 17.3666 12.2162 17.5011 12.9031 17.7408C12.4959 18.3612 12.1516 19.0258 11.8781 19.7264C11.5063 19.6257 11.1165 19.5691 10.7129 19.5691C8.43507 19.5691 6.54955 21.2785 6.26612 23.4829H4.05416C4.34724 20.0616 7.22073 17.3666 10.7129 17.3666ZM3.54643 26.8717C4.40383 36.2446 12.3005 43.6114 21.8832 43.6114C31.4656 43.6114 39.3622 36.2446 40.2196 26.8717H3.54643ZM39.7118 23.4831H37.5C37.2162 21.2785 35.3313 19.5692 33.0531 19.5692C32.6496 19.5692 32.2591 19.6237 31.887 19.7242C31.6132 19.0234 31.2689 18.3585 30.8614 17.7383C31.5484 17.4981 32.2854 17.3666 33.0531 17.3666C36.5453 17.3666 39.4187 20.0616 39.7118 23.4831ZM23.5754 13.0114C24.3386 13.1328 25.0746 13.3368 25.7758 13.6107V8.97985H23.5754V13.0114Z"
                                      fill="currentColor" />
                              </svg>

                          </div>
                          <h3 className="h3 card-title">Soup</h3>
                          <p className="card-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                          <img className=" w-100 card-img" src={promo4} loading="lazy" width="300" height="300" alt="promo-1"/>
                      </div>
                  </li>

                  <li className="promo-item">
                      <div className="promo-card">
                          <div className="card-icon">
                              <svg width="50" height="50" viewBox="0 0 47 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                      d="M45.5174 27.4125H43.3305V11.5641C43.3305 10.7345 42.6667 10.0618 41.8479 10.0618H37.2147V1.64942C37.2147 0.819833 36.5508 0.147217 35.732 0.147217H11.2681C10.4494 0.147217 9.78549 0.819833 9.78549 1.64942V10.0618H5.15228C4.3335 10.0618 3.66964 10.7345 3.66964 11.5641V27.4125H1.48264C0.663697 27.4125 0 28.0851 0 28.9147C0 29.7442 0.663697 30.4169 1.48264 30.4169H22.0174V34.8484H18.6073C17.7885 34.8484 17.1246 35.521 17.1246 36.3506C17.1246 37.1802 17.7885 37.8528 18.6073 37.8528H28.3927C29.2115 37.8528 29.8754 37.1802 29.8754 36.3506C29.8754 35.521 29.2115 34.8484 28.3927 34.8484H24.9826V30.4169H45.5174C46.3361 30.4169 47 29.7442 47 28.9147C47 28.0851 46.3361 27.4125 45.5174 27.4125ZM12.7508 3.15162H34.2492V10.0618H12.7508V3.15162ZM40.3651 15.0439V13.0663H6.63507V15.0439C6.93163 15.0982 7.2092 15.2422 7.42315 15.4593C7.70056 15.7388 7.8577 16.1263 7.8577 16.5214C7.8577 16.9164 7.70056 17.304 7.42315 17.5833C7.20952 17.8002 6.93116 17.9444 6.63507 17.9987V21.4643C7.22566 21.3955 7.55845 21.0721 8.16186 20.437C8.94867 19.6085 10.0264 18.4743 12.0842 18.4743C14.1423 18.4743 15.2198 19.6085 16.0066 20.4368C16.6931 21.1593 17.0287 21.4787 17.7929 21.4787C18.5569 21.4787 18.8926 21.1593 19.5787 20.437L19.5788 20.4369C20.3656 19.6086 21.4431 18.4743 23.5009 18.4743C25.5584 18.4743 26.6359 19.6084 27.4228 20.4366L27.4232 20.437C28.1093 21.1593 28.4448 21.4787 29.2088 21.4787C29.9729 21.4787 30.3084 21.1593 30.9945 20.437C31.7813 19.6087 32.859 18.4743 34.9167 18.4743C36.9744 18.4743 38.0517 19.6084 38.8385 20.4367L38.8388 20.437C39.442 21.0721 39.7747 21.3953 40.3651 21.4643V17.9989C40.0692 17.9445 39.7911 17.8004 39.5759 17.5833C39.3001 17.304 39.1415 16.9164 39.1415 16.5214C39.1415 16.1263 39.3001 15.7388 39.5759 15.4593C39.79 15.2422 40.0687 15.0981 40.3651 15.0439ZM6.63491 24.4743C8.52377 24.3829 9.54527 23.3129 10.2979 22.5204C10.9844 21.7981 11.3199 21.4787 12.0841 21.4787C12.8482 21.4787 13.1839 21.7981 13.8701 22.5204C14.657 23.3487 15.7349 24.4831 17.7927 24.4831C19.8506 24.4831 20.9285 23.3487 21.7151 22.5204C22.4013 21.7981 22.7369 21.4787 23.5008 21.4787C24.2647 21.4787 24.6003 21.7981 25.2865 22.5204L25.287 22.5209C26.0739 23.3492 27.1512 24.4831 29.2087 24.4831C31.2665 24.4831 32.344 23.3488 33.1308 22.5205L33.1309 22.5204C33.8171 21.7981 34.1527 21.4787 34.9166 21.4787C35.6804 21.4787 36.0159 21.7981 36.7021 22.5204C37.4549 23.3126 38.4762 24.3827 40.3649 24.4743V27.4125H6.63491V24.4743ZM18.8396 17.5833C18.5639 17.8628 18.1814 18.0236 17.7915 18.0236C17.4014 18.0236 17.0203 17.8628 16.7431 17.5833C16.4672 17.304 16.3088 16.9164 16.3088 16.5214C16.3088 16.1263 16.4672 15.7388 16.7431 15.4593C17.0189 15.1798 17.4014 15.0192 17.7915 15.0192C18.1828 15.0192 18.5639 15.1798 18.8396 15.4593C19.1168 15.7388 19.274 16.1263 19.274 16.5214C19.274 16.9164 19.1168 17.304 18.8396 17.5833ZM29.2077 18.0236C29.5977 18.0236 29.9801 17.8628 30.2558 17.5833C30.5331 17.304 30.6904 16.9164 30.6904 16.5214C30.6904 16.1263 30.5331 15.7388 30.2558 15.4593C29.9801 15.1798 29.5991 15.0192 29.2077 15.0192C28.8178 15.0192 28.4352 15.1798 28.1595 15.4593C27.8837 15.7388 27.7251 16.1263 27.7251 16.5214C27.7251 16.9164 27.8837 17.304 28.1595 17.5833C28.4352 17.8628 28.8178 18.0236 29.2077 18.0236ZM15.1122 5.54466C15.388 5.26519 15.7705 5.10453 16.1604 5.10453C16.5503 5.10453 16.933 5.26519 17.2085 5.54466C17.4859 5.82413 17.643 6.21166 17.643 6.60674C17.643 7.00181 17.4859 7.38934 17.2085 7.66865C16.933 7.94812 16.5519 8.10894 16.1604 8.10894C15.7705 8.10894 15.388 7.94812 15.1122 7.66865C14.8363 7.38934 14.6778 7.00181 14.6778 6.60674C14.6778 6.21166 14.8363 5.82413 15.1122 5.54466ZM23.4995 5.10453C23.1096 5.10453 22.7271 5.26519 22.4513 5.54466C22.1755 5.82413 22.0169 6.21166 22.0169 6.60674C22.0169 7.00181 22.1755 7.38934 22.4513 7.66865C22.7271 7.94812 23.1096 8.10894 23.4995 8.10894C23.891 8.10894 24.2721 7.94812 24.5476 7.66865C24.825 7.38934 24.9822 7.00181 24.9822 6.60674C24.9822 6.21166 24.825 5.82413 24.5476 5.54466C24.2721 5.26519 23.8895 5.10453 23.4995 5.10453ZM29.7904 5.54466C30.0662 5.26519 30.4487 5.10453 30.8386 5.10453C31.2302 5.10453 31.6112 5.26519 31.8867 5.54466C32.1641 5.82413 32.3213 6.21166 32.3213 6.60674C32.3213 7.00181 32.1626 7.38934 31.8867 7.66865C31.6112 7.94812 31.2302 8.10894 30.8386 8.10894C30.4487 8.10894 30.0662 7.94812 29.7904 7.66865C29.5146 7.38934 29.356 7.00181 29.356 6.60674C29.356 6.21166 29.5146 5.82413 29.7904 5.54466Z"
                                      fill="currentColor" />
                              </svg>
                          </div>
                          <h3 className="h3 card-title">Desserts</h3>
                          <p className="card-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                          <img className=" w-100 card-img" src={promo5} loading="lazy" width="300" height="300" alt="promo-1"/>
                      </div>
                  </li>
              </ul>
          </div>
      </section>


      {/* aobut us */}
      <section className="section section-divider gray about" id="aboutus">
          <div className="container">
              <div className="about-banner">
                  <img src={aboutus} width="610" height="559" loading="lazy" className="w-100 about-img" alt="about"/>
                  <img src={aboutus2} width="216" height="226" alt="get up to 50% off now" className="abs-img scale-up-anim"/>
              </div>

              <div className="about-content">
                  <h2 className="h2 section-title">Caffe, burgers and the best pizzas <span className="span">from the city!</span>
                  </h2>
                  <p className="section-text">
                  For the past twenty years, YourRestro has been a restaurant always curious to learn and grow, to be the best we can be! Our origin is rooted in an exploration of the natural world, which began with a simple desire to rediscover
                      wild local ingredients by foraging and following the seasons.
                  </p>
                  <ul className="about-list">
                      <li className="about-item">
                          <ion-icon name="checkmark-outline"></ion-icon>
                          <span className="span">Delicious and healthy foods</span>
                      </li>
                      <li className="about-item">
                          <ion-icon name="checkmark-outline"></ion-icon>
                          <span className="span">Family and children's area</span>
                      </li>
                      <li className="about-item">
                          <ion-icon name="checkmark-outline"></ion-icon>
                          <span className="span">Music and other facilities </span>
                      </li>
                      <li className="about-item">
                          <ion-icon name="checkmark-outline"></ion-icon>
                          <span className="span">Faster food home delivery.</span>
                      </li>
                  </ul>
                  <button className="btn btn-hover">Order now</button>
              </div>
          </div>
      </section>

       {/* store  */}
      <section className="section food-menu" id="store">
          <div className="container">
              <p className="section-subtitle">Popular Dishes</p>
              <h2 className="h2 section-title">Our delicious<span className="span"> 
Foods</span></h2>
              <p className="section-text">The best of our dishes made with the best products because we think about your health.</p>
              <ul className="filter-list">
                  <li>
                      <button type="button" className="filter-btn active">All</button>
                  </li>
                  <li>
                      <button type="button" className="filter-btn">Pizza</button>
                  </li>
                  <li>
                      <button type="button" className="filter-btn">Sushi</button>
                  </li>

                  <li>
                      <button type="button" className="filter-btn">Burgers</button>
                  </li>

                  <li>
                      <button type="button" className="filter-btn">Soup</button>
                  </li>

                  <li>
                      <button type="button" className="filter-btn">Sushi</button>
                  </li>
              </ul>

              <ul className="food-menu-list">
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo1} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title"> Unlimited Fried Chicken</h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo1} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title"> Unlimited Fried Chicken</h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo3} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title"> Alitas Broaster</h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo3} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title"> Unlimited Fried Chicken</h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo4} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title">BBQ Chicken </h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="food-menu-card">
                          <div className="card-banner">
                              <img src={promo1} width="300" height="300" loading="lazy" className="w-100" alt="img-food"/>
                              <div className="badge"> -15 %</div>
                              <button className="btn food-menu-btn">Order now</button>
                          </div>
                          <div className="wrapper">
                              <p className="category">Chicken</p>
                              <div className="rating-wrapper">
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                                  <ion-icon name="star"></ion-icon>
                              </div>
                          </div>
                          <h3 className="h3 card-title"> Unlimited Fried Chicken</h3>
                          <div className="price-wrapper">
                              <p className="price-text">Price:</p>
                              <data className="price"> $ 49.00</data>
                              <del className="del" value="69.00"> $ 69.00 </del>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </section>

      {/* cta */}
      <section className="section section-divider white cta cta-back">
          <div className="container">
              <div className="cta-content">
                  <h2 className="h2 section-title">Food lover <span className="span">Quality burgers!</span></h2>
                  <p className="section-text">The customer should be aware of the fact that the adipisicing elit.n will be rejected! But, does he hate it? I will continue with the services. Please understand, it will happen because it interferes with the present interests.</p>
                  <button className="btn btn-hover">Order now</button>
              </div>
              <figure className="cta-banner">
                  <img src={ctaimg} width="100" height="135" loading="lazy" className="w-100 cta-img" alt="img-cta"/>
              </figure>
          </div>
      </section>

      {/* gallery banner */}
      <section className="section section-divider gray gallery" id="gallery">
          <div className="container">
              <ul className="gallery-list">
                  <li className="gallery-item gallery-lg">
                      <div className="gallery-card">
                          <img src={gallery1} width="550" height="450" className="gallery-img" loading="lazy" alt="banner img1"/>
                          <div className="gallery-item-content">
                              <p className="gallery-subtitle"> 50% OFF!</p>
                              <h3 className="gallery-title">Discount for delicious tasty burgers!</h3>
                              <p className="gallery-text">50% discount offer this week only</p>
                              <button className="btn">Order now</button>
                          </div>
                      </div>
                  </li>
                  <li className="gallery-item gallery-sm">
                      <div className="gallery-card">
                          <img src={gallery2} width="550" height="450" className="gallery-img" loading="lazy" alt="banner img1"/>
                          <div className="gallery-item-content">
                              <h3 className="gallery-title"> Tasty pizza!</h3>
                              <p className="gallery-text">50% discount now </p>
                              <button className="btn">Order now</button>
                          </div>
                      </div>
                  </li>
                  <li className="gallery-item gallery-sm">
                      <div className="gallery-card">
                          <img src={gallery3} width="550" height="450" className="gallery-img" loading="lazy" alt="banner img1"/>
                          <div className="gallery-item-content">
                              <h3 className="gallery-title">Tasty burgers!</h3>
                              <p className="gallery-text">50% discount now </p>
                              <button className="btn">Order now</button>
                          </div>
                      </div>
                  </li>
                  <li className="gallery-item gallery-md">
                      <div className="gallery-card">
                          <img src={gallery4} width="550" height="450" className="gallery-img" loading="lazy" alt="banner img1"/>
                          <div className="gallery-item-content">
                              <h3 className="gallery-title">Tasty pizza!</h3>
                              <p className="gallery-text">50% discount now </p>
                              <button className="btn">Order now</button>
                          </div>
                      </div>
                  </li>
                  <li className="gallery-item gallery-ms">
                      <div className="gallery-card">
                          <img src={gallery3} width="550" height="450" className="gallery-img" loading="lazy" alt="banner img1"/>
                          <div className="gallery-item-content">
                              <h3 className="gallery-title">Tasty pizza!</h3>
                              <p className="gallery-text">50% discount now </p>
                              <button className="btn">Order now</button>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
<Footer/>
      <a href="#top" className="back-top-btn" aria-label="Back to top " data-back-top-btn>
          <ion-icon name="chevron-up"></ion-icon>
      </a>

  </article>
  </>
  )
}
