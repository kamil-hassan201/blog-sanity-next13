function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-3xl md:text-7xl">Book Time with Kamil</h1>
        <h2 className=" mt-5 md:mt-3">
          Take the&nbsp;
          <span className="underline decoration-4 decoration-yellow-500">
            shortest path
          </span>
          &nbsp;to learn from books
        </h2>
      </div>
      <p className="mt-5 md:mt-3 text-gray-400 max-w-md">
        Fictions | Non-fictions | Science | Book Summary | Notes from Books
      </p>
    </div>
  );
}

export default Banner;
