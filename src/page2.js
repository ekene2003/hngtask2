import React from "react";
import "./index.css";
import "./page2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Page2 = () => {
  return <SecondForm></SecondForm>;
};
function SecondForm(params) {
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
      <section className="page-2body">
        <div className="p2body-wrap">
          <div className="th-wrap2 d-flex w-100 justify-content-between align-items-center">
            <h1 className="ticket-h">Attendee Details</h1>
            <p className="ticket-p">Step 2/3</p>
          </div>
          <div className="line">
            <div className="p-line"></div>
          </div>
          <section className="p2-wrap">
            <div className="p2-innerwrap">
              <p className="p2iw-h">Upload Profile Photo</p>
              <div className="upload-wrap">
                <div className="upload">
                  <img
                    src="/cloud-download.svg"
                    alt=""
                    className="upload-img"
                  />
                  <p className="upload-p">Drag & drop or click to upload</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="p2-form-wrap w-100">
              <Form className="p2-form ">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Enter your email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="✉hello@avioflagos.io"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Special request?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="TextArea"
                    className="w-100"
                  />
                </Form.Group>
              </Form>
              <div className="button-wrap w-100 text-capitalize">
                <a href="" className="cancel-btn w-100 p2-end">
                  cancel
                </a>

                <Link to="/page3" className="next-btn w-100 p2-end">
                  get my free ticket
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Page2;
