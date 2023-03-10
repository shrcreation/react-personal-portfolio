import React from 'react';
import './footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Md. Shahadot Hossain
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__details">
        <a href="https://web.facebook.com/shahadot.shr.rahat" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/rahat_shr" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/shahadot_shr" target="_blank">
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UC6ilHykZxnKn0PNxZgsx1Dw"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MD. Shahadot Hossain. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
