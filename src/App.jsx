import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleQuote } from "./components/SingleQuote";
import ListOfQuotes from "./components/ListOfQuotes";
import { useEffect, useState } from "react";
function App() {
  const [quote, setSingleQuote] = useState([]);

  const singleQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setSingleQuote(data);
  };

  useEffect(() => {
    singleQuote();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleQuote singleQuote={singleQuote}  quote={quote}/>} />
        <Route path="/authorQuotes/:slug" element={<ListOfQuotes singleQuote={singleQuote} quote={quote} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
