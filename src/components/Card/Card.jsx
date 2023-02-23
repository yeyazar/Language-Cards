import "./Card.css";

const Card = (data) => {
  console.log(data);
  return (
    <div>
      <div className="card">
        <img className="small-logo" src={data.img} alt="" />
        <h6 className="name">{data.name}</h6>
      </div>
    </div>
  );
};

export default Card;
