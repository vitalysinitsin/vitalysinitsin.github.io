import classNames from "classnames";

const DEFAULT = "flex gap-4 pr-4 justify-between";

function Navmenu({ className, children }) {
  return <ul className={classNames(DEFAULT, className)}>{children}</ul>;
}

export default Navmenu;
