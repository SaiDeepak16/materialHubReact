import { Fragment, useState } from "react";
import CardList from "./CardList";
import "./App.css";
import "./footer.css";
import "./nav.css";

function App() {
  const [selectCard, setSelectedCard] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="navBox">
          <div className="logo">
            <h3>
              <a href="#">
                Material Hub <i className="bx bx-book-open"></i>
              </a>
            </h3>
          </div>
          <div className="options">
            <div className="navbtn">
              <a href="#" className="a matNav">
                Materials <i className="fa fa-angle-down"></i>
              </a>
              <div className="navcard">
                <ul>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Schools</a>
                  </li>
                  <li>
                    <a href="#">PYQ's</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbtn">
              <a href="#" className="a semNav">
                Subjects <i className="fa fa-angle-down"></i>
              </a>
              <div className="navcard">
                <ul>
                  <li>
                    <a href="#" style={{ color: "red" }}>
                      coming soon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbtn">
              <a href="#" className="a tbNav">
                Textbooks <i className="fa fa-angle-down"></i>
              </a>
              <div className="navcard">
                <ul>
                  <li>
                    <a href="#" style={{ color: "red" }}>
                      coming soon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbtn">
              <a href="#" className="a ccNav">
                Course Code <i className="fa fa-angle-down"></i>
              </a>
              <div className="navcard">
                <ul>
                  <li>
                    <a href="#" style={{ color: "red" }}>
                      coming soon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navUtils"></div>
        </div>
      </nav>

      <section className="pcard">
        <div className="card-container" id="card-container">
          <h3>Semester 1</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 2</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 3</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 4</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 5</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 6</h3>
          <div>
              <CardList />
            </div>
          <h3>Semester 7</h3>
          <div>
              <CardList />
            </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              Material Hub <i className="bx bx-book-open"></i>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, consequatur.
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links">
              <i className="fas fa-phone"></i>+91 98xxx xxxx0
            </a>
            <a href="#" className="links">
              <i className="fas fa-phone"></i>+91 87xxx xxxx4
            </a>
            <a href="#" className="links">
              <i className="fas fa-envelope"></i>noting@gmail.com{" "}
            </a>
            <a href="#" className="links">
              <i className="fas fa-map-marker-alt"></i> hyderabad, Telengana,
              India - 124002
            </a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> Materials{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> Branches{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> Suggestions{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> Contact Us{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> Settings{" "}
            </a>
          </div>
        </div>
        <div className="credit">
          created by <span>Someone </span> | all rights reserved
        </div>
      </section>
    </>
  );
}

export default App;
