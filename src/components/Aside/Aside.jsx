import "./Aside.css";
import { ColumnList } from "../List";
import { AsideLink } from "../Link";

export const Aside = function (...props) {
  const asideItems = ["AsideMenu1", "AsideMenu2", "AsideMenu3", "AsideMenu4"];
  return (
    <aside>
      <h2>Asidebar</h2>
      <ColumnList>
        {asideItems.map((item) => {
          return <AsideLink key={item}>{item}</AsideLink>;
        })}
      </ColumnList>
    </aside>
  );
};
