import "./Header.css";
import { RowList } from "../List";
import { NavLink } from "../Link";

export const Header = function (...props) {
  const headerItems = ["NavMenu1", "NavMenu2", "NavMenu3"];
  return (
    <header>
      <h2>Header</h2>
      <RowList>
        {headerItems.map((item) => {
          return <NavLink>{item}</NavLink>;
        })}
      </RowList>
    </header>
  );
};
