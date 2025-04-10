"use client";
import { createContext, useState, ReactNode } from "react";

interface context {
  bill: string;
  perc: string;
  numOfPeople: string;
  setBill: (bill: string) => void;
  setPerc: (perc: string) => void;
  setNumOfPeople: (numOfPeople: string) => void;
}

export const contextP = createContext<context | null>(null);

export function AppContext({ children }: { children: ReactNode }) {
  const [userBill, setUserBill] = useState<string>("");
  const [userPerc, setUserPerc] = useState<string>("");
  const [userPeople, setUserPeople] = useState<string>("");

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
