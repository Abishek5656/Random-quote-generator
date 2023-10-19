import { AiOutlineArrowRight } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
export const SingleQuote = ( { quote,singleQuote} ) => {
  // const [quote, setSingleQuote] = useState([]);

  // const singleQuote = async () => {
  //   const res = await fetch("https://api.quotable.io/random");
  //   const data = await res.json();
  //   setSingleQuote(data);
  // };

  // useEffect(() => {
  //   singleQuote();
  // }, []);

  return (
    <main>
      <div className="random-btn">
        <button onClick={singleQuote}>random</button>
        <BiRefresh onClick={singleQuote} />
      </div>
     
      <div className="container">
      <div className="line"></div>
        <div className="content">
          <p>{quote.content}</p>
        </div>
      </div>

      <Link to={`/authorQuotes/${quote.authorSlug}`} className="btn">
        <div className="btn-content">
          {/* <p>{quote.name}</p> */}

          <p>{quote?.author}</p>
          <AiOutlineArrowRight />
        </div>
      </Link>
    </main>
  );
};
