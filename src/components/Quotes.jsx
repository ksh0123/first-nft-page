import { FaCheck, FaBan } from "react-icons/fa";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [newQuoteInput, setNewQuoteInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem("quotesList")) || [
      "초심을 잃지말자!",
    ];
    const randomQuote =
      savedQuotes[Math.floor(Math.random() * savedQuotes.length)];
    setQuote(randomQuote);
  }, []);

  const onClickNewQuotes = () => {
    if (!newQuoteInput) return;

    const savedQuotes = JSON.parse(localStorage.getItem("quotesList")) || [];
    const updatedQuotes = [...savedQuotes, newQuoteInput];
    localStorage.setItem("quotesList", JSON.stringify(updatedQuotes));

    setQuote(newQuoteInput);
    setNewQuoteInput("");
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div
        className={`text-xl p-1 border-b-[1px] border-yellow-300 drop-shadow-md whitespace-pre ${
          isClicked && "hidden"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        🔔 {quote}
      </div>
      <div className="flex flex-col items-end gap-[1px]">
        <input
          type="text"
          placeholder="🏆 오늘의 명언!"
          value={newQuoteInput}
          onChange={(e) => setNewQuoteInput(e.target.value)}
          className={`px-2 py-2 mt-2 ${
            !isClicked && "hidden"
          } border-fuchsia-100 bg-fuchsia-200 bg-opacity-60 focus:bg-fuchsia-200 focus:bg-opacity-100 focus:outline-none rounded-lg text-fuchsia-80 text-sm`}
        />
        <div className="flex gap-2">
          <button
            className={`shadow-fuchsia-500 shadow-inner rounded-md text-fuchsia-800 text-xs p-2 mt-2 active:bg-fuchsia-300 ${
              !isClicked && "hidden"
            }`}
            onClick={onClickNewQuotes}
          >
            <FaCheck />
          </button>
          <button
            className={` shadow-fuchsia-500 shadow-inner rounded-md text-fuchsia-800 text-xs p-2 mt-2 active:bg-fuchsia-300 ${
              !isClicked && "hidden"
            }`}
            onClick={() => setIsClicked(!isClicked)}
          >
            <FaBan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
