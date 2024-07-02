import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Dropdown from "react-bootstrap/Dropdown";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { right } from "@popperjs/core";
import { PythonData } from "../../public/PythonData";
import PythonCompiler from "../components/PythonCompiler";

const PythonCodes = () => {
  const [data, setData] = useState(PythonData);

  const [id, setId] = useState(1.1);

  function changeId(el) {
    setId(el.target.value);
  }

  // ofcanvas

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <center>
        <div className="note-heading">
          <h3 onClick={handleShow} className="btn btn-light ">
            <Icon
              icon="svg-spinners:pulse-ring"
              width="1.2rem"
              height="1.2rem"
              style={{ color: "red" }}
            />
            Python Codes
            <Icon
              icon="svg-spinners:pulse-ring"
              width="1.2rem"
              height="1.2rem"
              style={{ color: "red" }}
            />
          </h3>
          <Button
            variant="dark"
            style={{ float: right }}
            className="d-sm-none  py-0 px-1"
            onClick={handleShow}
            data-toggle="tooltip"
            data-placement="top"
            title="Show Content"
          >
            <Icon icon="meteocons:mist-fill" width="2.5rem" height="2.4rem" />
          </Button>
        </div>
      </center>
      {/* OFFCANVAR END  */}

      <Container className="">
        <Row className="g-3">
          <Col xs={12} sm={4} lg={4} className="accordion ">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Basic </Accordion.Header>
                <Accordion.Body className="p-0">
                  <ol>
                    <li>
                      <Button variant="white" value="1.1" onClick={changeId}>
                        Introduction
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="1.2" onClick={changeId}>
                        Hello World
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="1.3" onClick={changeId}>
                        Variables
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="1.4" onClick={changeId}>
                      Basic Arithmetic
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="1.5" onClick={changeId}>
                      Condtional Statement 
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="1.6" onClick={changeId}>
                      Loops
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="1.7" onClick={changeId}>
                      Function Callings
                      </Button>
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Number Calculation</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      <Button variant="white" value="2.1" onClick={changeId}>
                        Factorial
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="2.2" onClick={changeId}>
                      Prime Number
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="#" onClick={changeId}>
                      test 3
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="#" onClick={changeId}>
                      test 4
                      </Button>
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. String</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      <Button variant="white" value="0" onClick={changeId}>
                      test 1
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="1" onClick={changeId}>
                      test 2
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="2" onClick={changeId}>
                      test 3
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="3" onClick={changeId}>
                      test 4
                      </Button>
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            
            
            
              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Files</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      <Button variant="white" value="0" onClick={changeId}>
                      test 1
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="1" onClick={changeId}>
                      test 2
                      </Button>
                    </li>

                    <li>
                      <Button variant="white" value="2" onClick={changeId}>
                      test 3
                      </Button>
                    </li>
                    <li>
                      <Button variant="white" value="3" onClick={changeId}>
                      test 4
                      </Button>
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>
          </Col>
          <Col>
            {data
              .filter((javaData) => javaData.id == id)
              .map((filteredJavaData) => (
                <div className="code_data_Slide" key={filteredJavaData.id}>
                  <h2> {filteredJavaData.title}</h2>
                  <p>{filteredJavaData.details}</p>

                  <textarea
                    style={{
                      letterSpacing: "0.1rem",
                      fontSize: "0.8rem",
                      fontFamily: "sans-serif",
                    }}
                    className="w-100 bg-dark text-white border-0 rounded-3"
                    rows={filteredJavaData.code.split(/\r\n|\r|\n/).length}
                  >
                    {filteredJavaData.code}
                  </textarea>
                </div>
              ))}
          </Col>
        </Row>
        <Row>
          <h6>Run you code --</h6>
          <Col>
            <div>
              <PythonCompiler/>
            </div>
          </Col>
        </Row>
      </Container>
      {/*-------------- OFFCANVAS COMPONENT START-------------------- */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              className="w-100"
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              1. Basic
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100  p-0" onClick={handleClose}>
              <ol className="m-0">
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.1" onClick={changeId}>
                      Introduction
                    </Button>
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.2" onClick={changeId}>
                      Hello World
                    </Button>
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.3" onClick={changeId}>
                     Variables
                    </Button>
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.4" onClick={changeId}>
                     Basic Arithmetic 
                    </Button>
                  </Dropdown.Item>
                </li>

                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.5" onClick={changeId}>
                      Conditional Statement
                    </Button>
                  </Dropdown.Item>
                </li>

                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.6" onClick={changeId}>
                      Loops
                    </Button>
                  </Dropdown.Item>
                </li>

                <li>
                  <Dropdown.Item>
                    <Button variant="" value="1.7" onClick={changeId}>
                     Function Callings
                    </Button>
                  </Dropdown.Item>
                </li>
              </ol>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-1" data-bs-theme="dark">
            <Dropdown.Toggle
              className="w-100"
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              2. Number Calculation
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100  p-0" onClick={handleClose}>
              <ol className="m-0">
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="2.1" onClick={changeId}>
                      Factorial
                    </Button>
                  </Dropdown.Item>
                </li>


                <li>
                  <Dropdown.Item>
                    <Button variant="" value="2.2" onClick={changeId}>
                      Prime Number
                    </Button>
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="#" onClick={changeId}>
                      test 3
                    </Button>
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Item>
                    <Button variant="" value="#" onClick={changeId}>
                      test 4
                    </Button>
                  </Dropdown.Item>
                </li>
              </ol>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
      {/*-------------- OFFCANVAS COMPONENT END-------------------- */}
    </>
  );
};
export default PythonCodes;
