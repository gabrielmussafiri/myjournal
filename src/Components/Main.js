function Main(props) {
  return (
    <div>
      <section className="section--main">
        <div className="section--picture">
          <img src={props.imageUrl} alt="" />
        </div>
        <div className="section--text">
          <p>{props.location}</p>
          <h3 className="section--title">{props.title}</h3>
          <p>{props.startDate}</p>
          <p>{props.description}</p>
        </div>
      </section>
      {/* <hr className="ligne" /> */}
    </div>
  );
}
export default Main;
