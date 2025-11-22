import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const MobileNavbar = ({ categories, filterProducts, currentActiveCat }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <div className="sm:hidden h-full relative">
      <FaBars
        size={19}
        onClick={() => setIsMobileNavOpen(true)}
        className="cursor-pointer"
      />
      {isMobileNavOpen && (
        <div className="flex flex-col bg-gray-900 z-50 text-white text-sm p-4 -top-9 rounded-l-lg w-50 h-screen -right-4 absolute gap-y-0.5">
          <RxCross2
            onClick={() =>
              setIsMobileNavOpen(false)
            }
            size={19}
            className="ml-auto cursor-pointer"
          />
          {categories.map((cat) => (
            <p
              key={cat}
              className={`${
                currentActiveCat === cat ? "font-bold bg-gray-50/10" : ""
              } cursor-pointer hover:bg-gray-50/10 p-2 rounded-lg`}
              onClick={() => filterProducts(cat)}
            >
              {cat}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
