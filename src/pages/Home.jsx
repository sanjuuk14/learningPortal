import MyCarousel from "../components/MyCarousel";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container-sm ">
      {/* Carousel  */}

      <MyCarousel />

      {/* Cards  */}
      <center>
        <div className="note-heading ">
          <h3 className="text-dark">Notes</h3>
        </div>
        <Row xs={2} sm={3} md={4} lg={4} xl={5} xxl={6} className="mt-1 g-3">
          <Col className="col">
            <Link
              to="javacodes"
              className="card-shadow"
              href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-"
            >
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main1.png"
                  />
                </div>
                <Card.Title className="title text-light"> Java </Card.Title>
                <Card.Img className="character" src="zoom1.png" />
                <Card.Text></Card.Text>
              </Card>
            </Link>
          </Col>
          <Col className="col">
            <a
              className="card-shadow"
              href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-"
            >
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main2.png"
                  />
                </div>
                <Card.Title className="title text-light"> Python </Card.Title>
                <Card.Img className="character" src="zoom2.png" />
                <Card.Text></Card.Text>
              </Card>
            </a>
          </Col>
          <Col className="col">
            <a className="card-shadow" href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-">
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main3.png"
                  />
                </div>
                <Card.Title className="title text-light"> DBMS </Card.Title>
                <Card.Img className="character" src="zoom3.png" />
                <Card.Text></Card.Text>
              </Card>
            </a>
          </Col>
          <Col className="col ">
            <a className="card-shadow" href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-">
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main4.png"
                  />
                </div>
                <Card.Title className="title text-light">DS</Card.Title>
                <Card.Img className="character" src="zoom4.png" />
                <Card.Text></Card.Text>
              </Card>
            </a>
          </Col>
          <Col className="col">
            <a className="card-shadow" href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-">
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main5.png"
                  />
                </div>
                <Card.Title className="title text-light"> HTML </Card.Title>
                <Card.Img className="character" src="zoom5.png" />
                <Card.Text></Card.Text>
              </Card>
            </a>
          </Col>
          <Col className="col">
            <a className="card-shadow" href="https://drive.google.com/uc?export=download&id=1heAiPYzyAe_asxWPlt8ITV6SvrvmjN8-">
              <Card className="card w-75  bg-dark">
                <div className="wrapper">
                  <Card.Img
                    className="cover-image"
                    variant="top"
                    src="main6.png"
                  />
                </div>
                <Card.Title className="title text-light"> CSS </Card.Title>
                <Card.Img className="character" src="zoom6.png" />
                <Card.Text></Card.Text>
              </Card>
            </a>
          </Col>
        </Row>
        <hr className="w-75" />
      </center>
    </div>
  );
};
export default Home;
