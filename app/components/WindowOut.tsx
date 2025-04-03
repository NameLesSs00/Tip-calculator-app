"use client";
import { useContext, useState, useEffect } from "react";
import { contextP } from "@/app/components/appContext";

function WindowOut() {
  const context = useContext(contextP);
  const [Amout, setAmout] = useState("0");
  const [Total, setTotal] = useState("0");

  if (!context) return <p>Loading...</p>;

  // Update Amout whenever context values change
  useEffect(() => {
    if (context.bill && context.perc) {
      const tip = (context.perc * context.bill).toFixed(2);
      setAmout(tip);

      const totalAmount = (parseFloat(tip) * context.numOfPeople).toFixed(2);
      setTotal(totalAmount);
    }
  }, [context.bill, context.perc, context.numOfPeople]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Tip Amount</p>
          <p>{"/"}person</p>
        </div>
        <div>
          <p className="text-2xl">${Amout}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Total</p>
          <p>{"/"}person</p>
        </div>
        <div>
          <p className="text-2xl">${Total}</p>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            context.setBill(0);
            context.setPerc(0);
            context.setNumOfPeople(0);
            setAmout("0");
            setTotal("0");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default WindowOut;
