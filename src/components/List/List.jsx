import "./List.css";

export const RowList = function ({ ...props }) {
  return <ul className="nav_list-row-end" {...props}></ul>;
};

export const ColumnList = function ({ ...props }) {
  return <ul className="nav_list-col" {...props}></ul>;
};
