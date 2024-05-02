import "./Link.css";

export const NavLink = function ({ children, ...props }) {
  return (
    <a href="/" className="nav-link" {...props}>
      {children}
    </a>
  );
};

export const AsideLink = function ({ children, ...props }) {
  return (
    <a href="/" className="aside-link" {...props}>
      {children}
    </a>
  );
};
