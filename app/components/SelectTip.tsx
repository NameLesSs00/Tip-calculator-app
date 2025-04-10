"use client";
import { useContext, useState, useEffect } from "react";
import { contextP } from "@/app/components/appContext";

function SelectTip() {
  const context = useContext(contextP);
  const [customTip, setCustomTip] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (customTip && !isNaN(Number(customTip))) {
        context?.setPerc(customTip);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [customTip, context]);

  if (!context) return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-gray-400 font-bold">Select Tip %</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mb-5">
        {[5, 10, 15, 25, 50].map((value) => {
          const percValue = (value / 100).toString();
          return (
            <button
              key={value}
              onClick={() => {
                context.setPerc(percValue);
                setCustomTip("");
              }}
              className={`w-full text-center py-2 text-base rounded-md font-bold transition-colors cursor-pointer hover:bg-[#9fe8df]
                ${
                  context.perc === percValue
                    ? "bg-[#26c0ab] text-[#00474b] "
                    : "bg-[#00474b] text-white "
                }`}
            >
              {value}%
            </button>
          );
        })}

        <input
          type="text"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
          className="w-full py-2 text-base border-2 border-transparent hover:border-[#26c0ab] focus:border-[#26c0ab] focus:outline-none rounded-md text-right text-[#00474b] transition-colors"
        />
      </div>
    </div>
  );
}

export default SelectTip;
