import classNames from "classnames";

function Button({ className, children, buttonStyle = "default" }) {
  const options = {
    default: "flex items-center h-8 bg-blue-400 p-2 rounded-sm truncate",
    plain: "flex items-center truncate",
  };
  return (
    <button className={classNames(options[buttonStyle], className)}>
      {children}
    </button>
  );
}

export default Button;
