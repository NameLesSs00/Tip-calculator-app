"use client";
import { useContext, useState, useEffect } from "react";
import { contextP } from "@/app/components/appContext";

function WindowOut() {
  const context = useContext(contextP);
  const [Amount, setAmount] = useState("0.00");
  const [Total, setTotal] = useState("0.00");
  const isDisabled = Amount === "0.00" && Total === "0.00";

  if (!context) return <p>Loading...</p>;

  useEffect(() => {
    const bill = parseFloat(context.bill);
    const perc = parseFloat(context.perc);
    const people = parseInt(context.numOfPeople, 10);

    if (!isNaN(bill) && !isNaN(perc) && !isNaN(people) && people > 0) {
      const tipAmount = bill * perc;
      const tipPerPerson = (tipAmount / people).toFixed(2);
      const totalPerPerson = ((bill + tipAmount) / people).toFixed(2);
      setAmount(tipPerPerson);
      setTotal(totalPerPerson);
    } else {
      setAmount("0.00");
      setTotal("0.00");
    }
  }, [context.bill, context.perc, context.numOfPeople]);

  return (
    <div className="bg-[#00474b] p-6 rounded-lg flex flex-col justify-between sm:h-full">
      {/* Top section with tip and total */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-white">Tip Amount</p>
            <p className="text-gray-300 text-sm">/ person</p>
          </div>
          <div>
            <p className="text-3xl text-[#26c0ab]">${Amount}</p>
          </div>
        </div>
  
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-white">Total</p>
            <p className="text-gray-300 text-sm">/ person</p>
          </div>
          <div>
            <p className="text-3xl text-[#26c0ab]">${Total}</p>
          </div>
        </div>
      </div>
  
      {/* Bottom section with Reset button */}
      <div className="pt-8">
        <button
          onClick={() => {
            context.setBill("");
            context.setPerc("");
            context.setNumOfPeople("");
            setAmount("0.00");
            setTotal("0.00");
          }}
          disabled={isDisabled}
          className={`w-full py-3 rounded-md font-bold text-lg uppercase transition-colors 
          ${
            isDisabled
              ? "bg-[#0d686d] bg-opacity-10 text-[#00474b] text-opacity-20 cursor-not-allowed"
              : "bg-[#26c0ab] text-[#00474b] hover:bg-[#9fe8df]"
          }`}
        >
          Reset
        </button>
      </div>
    </div>
  );
  
}

export default WindowOut;

//#00474b bg
//#26c0ab text
