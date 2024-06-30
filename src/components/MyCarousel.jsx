import Carousel from "react-bootstrap/Carousel";
const MyCarousel = () => {
  return (
    <div>
      <Carousel
        fade
        interval={2000}
        indicators={false}
        controls={false}
        pause="hover"
        className=""
        data-bs-theme="dark"
      >
        <Carousel.Item>
          <img
            className="carousel d-block w-50  mx-auto"
            src="https://img.freepik.com/premium-vector/concept-break_118813-2033.jpg?w=1060"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="">JAVA</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel d-block w-50 mx-auto"
            src="https://img.freepik.com/premium-vector/people-talking-concept_118813-2076.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="">PYTHON</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel d-block w-50 mx-auto "
            src="https://img.freepik.com/premium-vector/concept-conversation_118813-2039.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="">DBMS</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default MyCarousel;
