const Quote = (props) => {
  return (
    <div className="center-container">
      <h2 className="quote">{props.quote}</h2>
      <h4 className="author">{props.author}</h4>
    </div>
  );
};

export default Quote;
