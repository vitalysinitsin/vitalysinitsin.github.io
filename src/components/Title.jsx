function Title({ children }) {
  return (
    <div className={"ml-3 overflow-hidden truncate text-nowrap pb-6"}>
      <span className="text-2xl font-extrabold">{children}</span>
      <span className="mx-3">/</span>
      <span className="text-sm">SOFTWARE DEVELOPER</span>
    </div>
  );
}

export default Title;
