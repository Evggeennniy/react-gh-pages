import "./Main.css";
import { Img } from "../Img";
import { useState } from "react";

export const Main = function () {
  let [clickersData, setCount] = useState({});

  const updateCounter = (key) => {
    let countOfClicks = clickersData[key] || 0;
    countOfClicks++;
    clickersData[key] = countOfClicks;
    setCount(clickersData);

    return countOfClicks;
  };

  return (
    <main>
      <h2>Main Container</h2>
      <div className="img__wrapper sad_smile">
        <Img
          src={
            "https://static.vecteezy.com/system/resources/previews/022/461/791/original/disappointed-emoji-sad-face-unhappy-emoticon-vector.jpg"
          }
          onClick={(e) => {
            const countOfClicks = updateCounter("sad_smile");
            const outputEl = e.target.parentElement.querySelector(
              "p.img__wrapper-output"
            );
            outputEl.textContent = countOfClicks;
          }}
        />
        <p className="img__wrapper-output">0</p>
      </div>
      <div className="img__wrapper neutral_smile">
        <Img
          src={
            "https://listemoji.com/img/emoji/using/neutral-face-1f610-facebook.png"
          }
          onClick={(e) => {
            const countOfClicks = updateCounter("neutral_smile");
            const outputEl = e.target.parentElement.querySelector(
              "p.img__wrapper-output"
            );
            outputEl.textContent = countOfClicks;
          }}
        />
        <p className="img__wrapper-output">0</p>
      </div>
      <div className="img__wrapper happy_smile">
        <Img
          src={
            "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093"
          }
          onClick={(e) => {
            const countOfClicks = updateCounter("happy_smile");
            const outputEl = e.target.parentElement.querySelector(
              "p.img__wrapper-output"
            );
            outputEl.textContent = countOfClicks;
          }}
        />
        <p className="img__wrapper-output">0</p>
      </div>
      <button
        className="show-results"
        onClick={() => {
          const theMostClickableImg = Object.keys(clickersData).reduce((a, b) =>
            clickersData[a] > clickersData[b] ? a : b
          );
          const imgWrappers = document.querySelectorAll(".img__wrapper");
          imgWrappers.forEach((item) => {
            console.log(item);
            if (!item.classList.contains(theMostClickableImg)) item.remove();
          });
        }}
      >
        Show Results
      </button>
    </main>
  );
};
