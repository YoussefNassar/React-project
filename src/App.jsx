import { BrowserRouter, json } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Quote from "./Quote";

function App() {
  let [quote, setQuote] = useState("");
  let [author, setAuthor] = useState("");

  // useEffect(() => {
  //   requestQuote();
  // },);

  async function requestQuote() {
    const url = "http://localhost:8099/";
    const options = {
      method: "GET",
    };
    const res = await fetch(url, options);
    const json = await res.json();
    setQuote(json.quote);
    setAuthor(json.author);
    console.log(json);
  }

  if (quote) {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <Header></Header>
          </header>
          <div className="center-container">
            <button className="button-56" onClick={(e) => requestQuote()}>
              Click to get quote
            </button>
            <Quote quote={quote} author={author}></Quote>
          </div>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <Header></Header>
          </header>
          <div className="center-container">
            <button className="button-56" onClick={(e) => requestQuote()}>
              Click to get quote
            </button>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
