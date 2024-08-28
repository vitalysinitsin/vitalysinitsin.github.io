function Navbar({ children }) {
  return (
    <header className="flex w-screen items-center ">
      <div className="flex h-fit w-full justify-around items-end">
        {children}
      </div>
    </header>
  );
}

export default Navbar;
