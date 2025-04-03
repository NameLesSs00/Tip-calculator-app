"use client";
import { createContext, useContext, useState, ReactNode } from "react";
 interface context {
  bill: number;
  perc: number;
  numOfPeople: number;
  setBill: (bill: number) => void;
  setPerc: (perc: number) => void;
  setNumOfPeople: (numOfPeople: number) => void;
}

export const contextP = createContext<context | null>(null);

export function AppContext({ children }: { children: ReactNode }) {
  const [userBill, setUserBill] = useState(0);
  const [userPerc, setUserPerc] = useState(0);
  const [userPeople, setUserPeople] = useState(0);

 

  return (
    <contextP.Provider
      value={{
        bill: userBill,
        perc: userPerc,
        numOfPeople: userPeople,
        setBill: setUserBill,
        setPerc: setUserPerc,
        setNumOfPeople: setUserPeople,
      }}
    >
      {children}
    </contextP.Provider>
  );
}

