import classNames from "classnames";

const DEFAULT = "h-8 bg-purple-500 p-1 text-center";

function Button({ className, children }) {
  return <button className={classNames(DEFAULT, className)}>{children}</button>;
}

export default Button;
