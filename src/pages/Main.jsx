import React, { useEffect, useState } from "react";
import quotes from "../quotes";
import Header from "../Header";
import Quote from "../Quote";

export default function Main() {
  const [quote, setquote] = useState();

  const renderQuotes = () => {
    let random = Math.floor(Math.random() * 8541);
    setquote(quotes[random]);
  };

  useEffect(() => {
    renderQuotes();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Header></Header>
      </header>
      <div className="center-container">
        {quote !== undefined && (
          <Quote quote={quote.Quote} author={quote.Author}></Quote>
        )}
        <button className="button-56" onClick={(e) => renderQuotes()}>
          Click to get quote
        </button>
      </div>
    </div>
  );
}
