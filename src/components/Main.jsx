function Main() {
  return (
    <div className="flex justify-center items-center bg-purple-400">
      <div className="h-96 w-2/3 bg-red-400 grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(max-content, 1fr))] ">
        <div className="bg-blue-400">
          <img src="/assets/me.jpg" alt="myPhoto" />
        </div>
        <div className="bg-green-400"></div>
      </div>
    </div>
  );
}

export default Main;
