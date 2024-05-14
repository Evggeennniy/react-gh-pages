import "./Main.css";
import { Img } from "../Img";
import { useState } from "react";
import { arrTabsData } from "../../data";
import { FormFormik } from "../Form";
import { ToDoList } from "../List";

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

// Створити форму за допомогою форми з наступними полями:

// ім'я, обов'язкове для заповнення;
// електронна пошта, обов'язкове для заповнення, формат email;
// телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
// Провалідувати всі поля і вивести повідомлення у відповідь

export const MainWithFormik = function () {
  return (
    <main>
      <h2>Formik Styled Form</h2>
      <FormFormik />
    </main>
  );
};

export const MainWithToDo = function () {
  return (
    <main>
      <h2>TODO app</h2>
      <ToDoList />
    </main>
  );
};
