function Book(props) {
  //easier to access prop keys using destructuring:
  //const {id, title, author, src } = props;

  return (
    <div className="book">
      <span>#{props.number + 1}</span>
      <img src={props.src} alt="book" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {/* {console.log(props)} */}
    </div>
  );
}

export default Book;
