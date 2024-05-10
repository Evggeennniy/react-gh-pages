import "./Main.css";
import { Img } from "../Img";
import { useState } from "react";
import arrTabsData from "../../data";

export const Main = function () {
  let [clickersData, setCount] = useState({});
  let [tabsData, setTabsData] = useState(arrTabsData);

  const updateData = (key) => {
    const newClickersData = { ...clickersData };
    let countOfClicks = (clickersData[key] || 0) + 1;
    newClickersData[key] = countOfClicks;
    setCount(newClickersData);
  };

  const handleShowResults = () => {
    const maxClicks = Math.max(...Object.values(clickersData));
    const filteredData = tabsData.filter(
      (item) => clickersData[item.key] === maxClicks
    );

    if (filteredData.length > 1) {
      alert("Multiple items have the maximum click count.");
    }

    setTabsData(filteredData);
  };

  return (
    <main>
      <h2>Main Container</h2>
      {tabsData.map((item) => (
        <div key={item.key} className="img__wrapper">
          <Img
            src={item.src}
            alt=""
            onClick={() => {
              updateData(item.key);
            }}
          />
          <p className="img__wrapper-output">{clickersData[item.key] || 0}</p>
        </div>
      ))}
      <button className="show-results" onClick={handleShowResults}>
        Show Results
      </button>
    </main>
  );
};
