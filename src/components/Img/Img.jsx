import "./Img.css";

export const Img = function ({ onClick, ...props }) {
  return (
    <img onClick={onClick} className="emoji-sticker" alt="img" {...props}></img>
  );
};
