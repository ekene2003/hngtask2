import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Firstform() {
  return (
    <>
      <div className="position-relative w-100 header-wrap">
        <header className="ticket-header  position-fixed start-50 translate-middle-x mt-3 ">
          <div className="brand-logo">
            <img src="/hugeicons_ticket-01.svg" alt="" className="logo-img" />
            <img src="/ticz.svg" alt="" className="logo-img" />
          </div>
          <div className="header-center text-capitalize ">
            <div className="link-ul ">
              <a href="" className="ul-link active">
                events
              </a>
              <a href="" className="ul-link">
                my tickets
              </a>
              <a href="" className="ul-link">
                about projects
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="header-btn d-flex">
              <a className="text-capitalize btn-h ">MY TICKET</a>
              <img src="/Line 5.svg" alt="" />
            </div>
          </div>
        </header>
      </div>
      <main className="ticket-body">
        <section className="ticket-1">
          <div className="th-wrap d-flex w-100 justify-content-between align-items-center">
            <h1 className="ticket-h">Ticket Selection</h1>
            <p className="ticket-p">Step 1/3</p>
          </div>
          <div className="line">
            <div className="p-line"></div>
          </div>
          <div className="ticket-wrap">
            <div className="innerwrap-top">
              <div className="iwt-writeups">
                <h1 className="iwt-h">Techember Fest ”25</h1>
                <p className="iwt-p">
                  Join us for an unforgettable experience at [Event Name]!
                  Secure your spot now.
                </p>
                <p className="iwt-p desktop-iwt">
                  📍 [Event Location] | | March 15, 2025 | 7:00 PM
                </p>
                <div className="iwt-wrap">
                  <p className="iwt-p iwt-p2 mobile-iwt">
                    📍 [Event Location] <br /> March 15, 2025 | 7:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="line2"></div>
            <div className="innerwrap-middle w-100">
              <p className="select-p">Select Ticket Type:</p>
              <div className="select-wrap">
                <div className="s-innerwrap">
                  <div className=" current">
                    <p className="so-h">Free</p>
                    <div className="so-wrap">
                      <p className="so-h2">
                        reglar Access <br />{" "}
                        <span className="so-h3">20/52</span>
                      </p>
                    </div>
                  </div>
                  <div className="select-opt">
                    <p className="so-h">$150</p>
                    <div className="so-wrap">
                      <p className="so-h2">
                        vip Access <br /> <span className="so-h3">20/52</span>
                      </p>
                    </div>
                  </div>
                  <div className="select-opt">
                    <p className="so-h">$150</p>
                    <div className="so-wrap">
                      <p className="so-h2">
                        vvip Access <br /> <span className="so-h3">20/52</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="iwb-h">Number of Tickets</h1>
            <Form.Select
              aria-label="Default select example"
              className="ticket-quantity"
            >
              <option>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>

            <div className="button-wrap w-100 text-capitalize">
              <a href="" className="cancel-btn w-100">
                cancel
              </a>

              <Link to="/page2" className="next-btn w-100">
                next
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Firstform;
