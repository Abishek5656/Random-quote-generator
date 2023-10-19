import { useParams } from "react-router-dom";
import { BiRefresh } from "react-icons/bi";
import { useEffect, useState } from "react";
const ListOfQuotes = ({ quote,singleQuote }) => {
 

  const [authorQuotes, setAuthorQuotes] = useState([]);

  const ListOfQuotes = async () => {
    const res = await fetch(`https://api.quotable.io/authors/slug/${quote.authorSlug}`);
    const data = await res.json();
    setAuthorQuotes(data.quotes);
  };

  useEffect(() => {
    ListOfQuotes();
  }, [authorQuotes]);

  return (
    <article>
      <div className="random-btn">
        <button onClick={singleQuote}>random</button>
        <BiRefresh onClick={singleQuote} />
      </div>

      <h2>{quote.author}</h2>
      {authorQuotes.map((authorQuote, index) => (
        <div key={index} className="container">
          <div className="line"></div>
          <div className="content">
            <p>{authorQuote.content}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ListOfQuotes;
