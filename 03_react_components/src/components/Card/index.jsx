import "./style.css"; // 自定义样式文件

const Card = ({ cover, avatar, title, content }) => {
  return (
    <div className="custom-card">
      {/* 封面图 */}
      <div className="card-cover">
        <img src={cover} alt="Cover" className="cover-image" />
      </div>
      {/* 内容部分 */}
      <div className="card-content">
        <div className="content-left">
          <img src={avatar} alt="Avatar" className="avatar-image" />
        </div>
        <div className="content-right">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
