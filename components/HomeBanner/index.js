import React from "react";
import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  return (
    <section id="home" className={styles['home-banner']}>
      <div className="hb-top-fixed d-flex">
        <div className="hb-info">
          <label>+04 6545-9535-6515</label>
          <label>nairobi-designer@domain.com</label>
        </div>
        <div className="hb-lang">
          <ul className="nav">
            <li className="active">
              <a href="#">EN</a>
            </li>
            <li>
              <a href="#">FR</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="col-lg-7">
            <div className="type-box">
              <h6>Hello, My name is</h6>
              <h1 className="font-alt">Nairobi Gadot</h1>
              <p className="lead">
                Full-stack Developer | UX/UI Designer | Freelancer
              </p>
              <p className="desc">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <div className="btn-bar">
                <a className="font-alt" href="#">
                  Donwload CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hb-me"
        // style="background-image: url(static/img/home-banner.png);"
      ></div>
    </section>
  );
};

export default HomeBanner;
