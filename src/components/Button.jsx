import classNames from "classnames";

function Button({ className, children, buttonStyle = "default" }) {
  const options = {
    default: "h-8 px-8 bg-blue-500 rounded-3xl font-bold text-sm text-white",
    outline:
      "h-8 px-8 from-transparent rounded-3xl font-bold text-sm border border-black",
    plain: "p-[1.5rem_1rem] hover:bg-blue-50",
  };
  return (
    <button
      className={classNames(
        "flex items-center truncate",
        options[buttonStyle],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
