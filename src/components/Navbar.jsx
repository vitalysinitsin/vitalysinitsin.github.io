function Navbar({ children }) {
  return (
    <header className="flex items-center bg-white overflow-hidden">
      <div className="flex h-fit w-full justify-around items-end">
        {children}
      </div>
    </header>
  );
}

export default Navbar;
