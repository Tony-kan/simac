const Newsletter = () => {
  return (
    <div className="bg-gray-800 p-10 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 italic">Subscribe Newsletter</h3>
      <p className="text-gray-300 mb-4  text-xl">
        The latest events, news, ideas and updates
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="bg-white text-black px-4 py-2 rounded-l-md w-full border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
        <button className="bg-orange-200 text-2xl text-black px-4 py-2 rounded-r-md font-bold">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
