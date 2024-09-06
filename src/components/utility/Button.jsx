import classNames from "classnames";
import { Link } from "react-router-dom";

const options = {
  default:
    "h-8 px-6 flex min-w-max bg-blue-500 rounded-3xl font-bold text-sm text-white",
  outline:
    "h-8 px-8 from-transparent rounded-3xl font-bold text-sm border border-black",
  plain: "h-full px-[1rem] hover:bg-blue-50",
};

function Button({ className, children, buttonStyle = "default" }) {
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

export function ButtonRouterLink({
  className,
  children,
  buttonStyle = "default",
  ...rest
}) {
  return (
    <Link
      className={classNames(
        "flex items-center truncate",
        options[buttonStyle],
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonHyperLink({
  className,
  children,
  buttonStyle = "default",
  ...rest
}) {
  return (
    <a
      className={classNames(
        "flex items-center truncate",
        options[buttonStyle],
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Button;
