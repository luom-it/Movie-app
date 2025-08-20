import { useState } from "react";

function Header({ onSearch }) {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className="bg-black p-4 flex items-center justify-between">
      {/* left */}
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">movie</h1>
        {/* nav */}
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      {/* right */}

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-3 text-white"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button
          className="px-4 py-2 text-white bg-red-500 cursor-pointer border border-none rounded"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
