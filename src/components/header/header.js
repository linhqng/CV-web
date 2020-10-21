import React from "react";
import avatar from "../../assets/img/avatar-1.jpg";
import "./header.styles.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img className="avatar__img" src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <h2 className="name__main">
          <span>Hang </span>Nguyen
        </h2>
        <h1 className="name__job">Front-end Developer</h1>
        <ul className="name__social">
          <li>
            <a href="https://fb.com">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>
            <i class="fas fa-calendar-week"></i> <span>March 12, 1999</span>
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span>Da Nang, Vietnam</span>
          </li>
          <li>
            <i class="fas fa-envelope"></i> <span>hangnguyen@gmail.com</span>
          </li>
          <li>
            <i class="fas fa-mobile"></i> <span>0372772298</span>
          </li>
          <li>
            <i class="fab fa-skype"></i> <span>Hang Nguyen</span>
          </li>
        </ul>
      </div>
      <div className="btn-box">
        <a className="btn btn-download" href="#">
          <i class="fas fa-arrow-circle-down"></i>
          Download CV
        </a>
      </div>
    </header>
  );
};
export default Header;
