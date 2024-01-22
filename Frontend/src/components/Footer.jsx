import  Facebook from"../assets/Facebook_Logo_2023.png"
import Instagram from "../assets/instagram-icon_1057-2227.avif"
import Twitter from "../assets/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.avif"
import GitHub from "../assets/GitHub-Mark-ea2971cee799.png"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <>
      <div>
        <footer className="py-5 bg-light">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a to="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a to="" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Your Message</h5>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Enetr Your Message
                  </label>
                  <textarea
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Message"
                    style={{height:"200px"}}
                    required
                    >
                    </textarea>
                    </div >
                    <div className="d-flex justify-content-center m-2 ">
                    <button className="btn btn-primary w-10 rounded-2" type="submit" >
                    Send
                  </button>
                    </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2024 QuickFood, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
              <a className="link-dark" href="#">
                  <img src={Facebook} alt="" style={{height:"50px",width:"auto"}}/>
                </a>
              </li>
              <li className="ms-3">
              <a className="link-dark" href="#">
                <img src={Instagram} alt="" style={{height:"50px",width:"auto"}}/>
                </a>
              </li>
              <li className="ms-3">
              <a className="link-dark" href="https://github.com/razzput007">
                <img src={GitHub} alt="" style={{height:"50px",width:"auto"}}/>
                </a>
              </li>
              <li className="ms-3">
              <a className="link-dark" href="#">
                <img src={Twitter} alt="" style={{height:"50px",width:"auto"}}/>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
