import { Carousel } from "antd";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}></h2>
      <Carousel autoplay>
        <div>
          <img
            src="https://bpic.588ku.com/back_list_pic/23/05/17/75e92f4e681efeb526f7d8603199ca11.jpg"
            alt="Slide 1"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div>
          <img
            src="https://file1.shop265.com/tk/2019/040662324dbb8d19957f5405e817c6ac.jpg"
            alt="Slide 2"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div>
          <img
            src="https://file1.shop265.com/tk/2019/040662324dbb8d19957f5405e817c6ac.jpg"
            alt="Slide 3"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;
