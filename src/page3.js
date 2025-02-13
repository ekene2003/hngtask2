import React from "react";
import "./index.css";
import "./page3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Page3 = () => {
  return <Thirdform></Thirdform>;
};
function Thirdform(params) {
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
      <div className="page3wrap">
        <div className="p3-iw">
          <div className="th-wrap2 d-flex w-100 justify-content-between align-items-center">
            <h1 className="ticket-h">Ready</h1>
            <p className="ticket-p">Step 3/3</p>
          </div>
          <div className="line">
            <div className="p-line"></div>
          </div>
          <div className="p3-writeups">
            <h1 className="p3-h">Your Ticket is Booked!</h1>
            <p className="p3-p">
              Check your email for a copy or you can download
            </p>
          </div>
          <div className="p3-ticket-wrap">
            <div className="p3-tick">
              <div className="p3-innertick">
                <h1 className="psi-h">Techember Fest ”25</h1>
                <p className="psi-p">📍 04 Rumens road, Ikoyi, Lagos</p>
                <p className="psi-p">📅 March 15, 2025 | 7:00 PM</p>
                <div className="user-img"></div>
                <div className="user-details mt-2">
                  <div className="details-wrap d-flex">
                    <div className="details">
                      <p className="de-p">Enter your name</p>
                      <p className="de-h">Avi Chukwu</p>
                    </div>
                    <div className="details2">
                      <p className="de-p">Enter your email*</p>
                      <p className="de-h">User@email.com</p>
                    </div>
                  </div>
                  <div className="details-wrap d-flex">
                    <div className="details">
                      <p className="de-p">ticket type:</p>
                      <p className="de-h2">vip</p>
                    </div>
                    <div className="details2">
                      <p className="de-p">Ticket for:</p>
                      <p className="de-h">1</p>
                    </div>
                  </div>
                  <div className="s-r">
                    <h className="sr-h">Special request?</h>
                    <h className="sr-p">
                      Nil ? Or the users sad story they write in there gets this
                      whole space, Max of three rows
                    </h>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrap w-100 text-capitalize">
            <a href="" className="cancel-btn w-100 p2-end">
              cancel
            </a>

            <Link to="" className="next-btn w-100 p2-end">
              download ticket
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;
