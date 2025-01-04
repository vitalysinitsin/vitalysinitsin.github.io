import classNames from "classnames";

const options = {
  default:
    "h-8 px-6 flex min-w-max bg-blue-500 rounded-3xl font-bold text-sm text-white",
  outline:
    "h-8 px-8 from-transparent rounded-3xl font-bold text-sm border border-black",
  plain: "h-full",
  link: "w-max border-b-2 text-blue-600 border-blue-600 hover:cursor-pointer hover:text-blue-400 hover:border-blue-300",
};

function Button({ className, children, hidden, buttonStyle = "default" }) {
  return (
    <button
      className={classNames(
        `flex items-center truncate ${hidden && "hidden"}`,
        options[buttonStyle],
        className
      )}
    >
      {children}
    </button>
  );
}

export function ButtonHyperLink({
  className,
  children,
  hidden,
  buttonStyle = "default",
  ...rest
}) {
  return (
    <a
      className={classNames(
        `flex items-center truncate ${hidden && "hidden"}`,
        options[buttonStyle],
        className
      )}
      {...rest}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Button;
