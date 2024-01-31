import React from 'react'

export default function Footer() {
  return (
    <><footer className="footer" id="signup">

    <div className="footer-top">
        <div className=" container ">
            <div className="footer-brand">

                <a href="" className="logo">YourRestro<span className="span "></span></a>

                <p className="footer-text ">
                If the customer is very smart, he or she will be able to achieve the desired result. Will anyone have trouble explaining this? He hates everything, moreover, the advantage which is followed by the great pleasure of labor.
                </p>

                <ul className="social-list">

                    <li>
                        <a href="# " className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="# " className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="# " className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="# " className="social-link">
                            <ion-icon name="logo-pinterest"></ion-icon>
                        </a>
                    </li>

                </ul>

            </div>

            <ul className="footer-list">

                <li>
                    <p className="footer-list-title ">Contact Us</p>
                </li>

                <li>
                    <p className="footer-list-item ">+99999999999999</p>
                </li>

                <li>
                    <p className="footer-list-item ">yourrestro@email.com</p>
                </li>

                <li>
                    <address className="footer-list-item ">ABC Road, ABC</address>
                </li>

            </ul>

            <ul className="footer-list ">
                <li>
                    <p className="footer-list-title "> Opening hours</p>
                </li>

                <li>
                    <p className="footer-list-item ">Monday to Friday: 08:00-22:00</p>
                </li>

                <li>
                    <p className="footer-list-item ">Tuesday 4PM: until midnight</p>
                </li>

                <li>
                    <p className="footer-list-item ">Saturday: 10:00-16:00</p>
                </li>
            </ul>

            <form>
                <p className="footer-list-title">Book a table</p>
                <div className="input-wrapper">
                    <input type="email" name="email_address" required placeholder="Email " aria-label="Email " className="input-field "/>
                    <button type="submit" className="btn">To send</button>
                </div>
            </form>

        </div>
    </div>

    <div className="footer-bottom">
        <div className="container">
            <p>
                &copy; 2024 <a href="#" className="copyright-link "></a> All rights reserved.
            </p>
        </div>
    </div>
</footer></>
  )
}
