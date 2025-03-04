import { Row, Col } from "antd";
import Card from "./Card/index";

const MainProductList = () => {
  const products = [
    {
      cover:
        "https://ts1.cn.mm.bing.net/th/id/R-C.838d0b0cc2ff487f7731a07e42978671?rik=NSx3DWOtIO2niA&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601952387%2f1483601952387.jpg&ehk=O8m52lUCtRgPcrcvaXU%2bpmFMoaxaoqoN7U17IsgrxMY%3d&risl=&pid=ImgRaw&r=0",
      avatar:
        "https://ts1.cn.mm.bing.net/th/id/R-C.838d0b0cc2ff487f7731a07e42978671?rik=NSx3DWOtIO2niA&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601952387%2f1483601952387.jpg&ehk=O8m52lUCtRgPcrcvaXU%2bpmFMoaxaoqoN7U17IsgrxMY%3d&risl=&pid=ImgRaw&r=0",
      title: "卡片1",
      content: "卡片1的描述",
    },
    {
      cover:
        "https://n.sinaimg.cn/sinacn10104/492/w1920h972/20190402/0c18-hvcmeux3543337.jpg",
      avatar:
        "https://n.sinaimg.cn/sinacn10104/492/w1920h972/20190402/0c18-hvcmeux3543337.jpg",
      title: "卡片2",
      content: "卡片2的描述",
    },
    {
      cover:
        "https://ts1.cn.mm.bing.net/th/id/R-C.6a63dec2a52cda2e4326048fd267db6d?rik=YLqq4ZaSTvoCeQ&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601973124%2f1483601973124.jpg&ehk=0Hy9WvQN0yBaTM7f5H9HoL2PezSrFSx9eXzGT2ONIjk%3d&risl=&pid=ImgRaw&r=0",
      avatar:
        "https://ts1.cn.mm.bing.net/th/id/R-C.6a63dec2a52cda2e4326048fd267db6d?rik=YLqq4ZaSTvoCeQ&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601973124%2f1483601973124.jpg&ehk=0Hy9WvQN0yBaTM7f5H9HoL2PezSrFSx9eXzGT2ONIjk%3d&risl=&pid=ImgRaw&r=0",
      title: "卡片3",
      content: "卡片3的描述",
    },
    {
      cover:
        "https://ts1.cn.mm.bing.net/th/id/R-C.f4773a0572e172deddba80a8f0aaeea9?rik=TprRDAo1ydeCOA&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601992641%2f1483601992641.jpg&ehk=rQduKu2OXBvgMvpMRaPygWxJiIbZAxOv3nfWR4%2bK%2fhg%3d&risl=&pid=ImgRaw&r=0",
      avatar:
        "https://ts1.cn.mm.bing.net/th/id/R-C.f4773a0572e172deddba80a8f0aaeea9?rik=TprRDAo1ydeCOA&riu=http%3a%2f%2fimgs.aixifan.com%2flive%2f1483601992641%2f1483601992641.jpg&ehk=rQduKu2OXBvgMvpMRaPygWxJiIbZAxOv3nfWR4%2bK%2fhg%3d&risl=&pid=ImgRaw&r=0",
      title: "卡片4",
      content: "卡片4的描述",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>商品列表</h2>
      <Row gutter={16}>
        {products.map((product, index) => (
          <Col key={index} span={6}>
            <Card {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainProductList;
