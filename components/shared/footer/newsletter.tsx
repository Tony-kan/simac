// Todo: implement newsletter component
const Newsletter = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 italic">Subscribe Newsletter</h2>
      <p className="text-sm text-gray-300 mb-4">
        The latest events, news, ideas and updates
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="bg-white px-4 py-2 rounded-l-md w-full text-black"
        />
        <button className="bg-yellow-300 text-black px-4 py-2 rounded-r-md font-bold">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
