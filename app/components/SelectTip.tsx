"use client";
import { useContext, useState, useEffect } from "react";
import { contextP } from "@/app/components/appContext";

function SelectTip() {
  const context = useContext(contextP);
  const [customTip, setCustomTip] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (customTip) {
        context?.setPerc(parseFloat(customTip) / 100);
      }
    }, 1000); // Wait 1 second before updating

    return () => clearTimeout(timer); // Clear timeout if user types again
  }, [customTip, context]);

  if (!context) return <p>Loading...</p>;

  return (
    <div>
      <p>Select Tip %</p>

      {/* Tip Buttons */}
      <div>
        <button onClick={() => context.setPerc(0.05)}>5%</button>
        <button onClick={() => context.setPerc(0.10)}>10%</button>
        <button onClick={() => context.setPerc(0.15)}>15%</button>
        <button onClick={() => context.setPerc(0.25)}>25%</button>
        <button onClick={() => context.setPerc(0.50)}>50%</button>
      </div>

      {/* Custom Tip Input (Debounced) */}
      <input
        type="number"
        placeholder="Custom Tip %"
        value={customTip}
        onChange={(e) => setCustomTip(e.target.value)}
      />
    </div>
  );
}

export default SelectTip;
