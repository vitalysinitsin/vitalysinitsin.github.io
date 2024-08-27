function Navbar({ className, children }) {
  return (
    <header className="flex h-20 w-screen items-center">
      <div className="flex h-fit w-full justify-around items-end overflow-hidden relative">
        {children}
      </div>
    </header>
  );
}

export default Navbar;
