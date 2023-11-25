import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer">
    <div className="container">
      <div className="footer-top section">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img
              src="./images/logo.png"
              width={129}
              height={40}
              alt="Goenkar Travels logo"
            />
          </a>
          <p className="footer-text">
            A minimal, functional theme for running a paid-membership
            publication on Ghost.
          </p>
        </div>
        <ul className="footer-list">
          <li>
            <p className="h5">Social</p>
          </li>
          <li className="footer-list-item">
          <ion-icon name="mail-outline"></ion-icon>
            <a href="#" className="footer-link hover:underline">
              contactus@goenkartravels.live
            </a>
          </li>
          <li className="footer-list-item">
            <ion-icon name="logo-facebook" />
            <a href="#" className="footer-link hover:underline">
              Facebook
            </a>
          </li>
          <li className="footer-list-item">
            <ion-icon name="logo-twitter" />
            <a href="#" className="footer-link hover:underline">
              Twitter
            </a>
          </li>
          <li className="footer-list-item">
            <ion-icon name="logo-pinterest" />
            <a href="#" className="footer-link hover:underline">
              Pinterest
            </a>
          </li>
          <li className="footer-list-item">
            <ion-icon name="logo-vimeo" />
            <a href="#" className="footer-link hover:underline">
              Vimeo
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="h5">About</p>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Style Guide
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              404
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="h5">Features</p>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Upcoming Events
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Blog &amp; News
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              FAQ Question
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Testimonial
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="h5">Membership</p>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Membership
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Subscribe
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Tags
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:underline">
              Authors
            </a>
          </li>
        </ul>
      </div>
      <div className="section footer-bottom">
        <p className="copyright">
          © Goenkar Travels 2023. Published by Raheed Muzawar{" "}
          <a href="#" className="copyright-link hover:underline" />.
        </p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer