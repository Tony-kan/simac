// Todo: implement bottom layer at the footer

const BottomBar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-6">
      <p className="text-sm text-gray-400">&copy; 2025 SIMAC</p>
      <div className="flex gap-4 mt-4 md:mt-0 text-2xl">
        <a href="#" aria-label="Facebook">
          📘
        </a>
        <a href="#" aria-label="X">
          ❌
        </a>
        <a href="#" aria-label="YouTube">
          ▶️
        </a>
        <a href="#" aria-label="Instagram">
          📷
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
  