"use client";

import logo from "@/public/logo.svg";
import Image from "next/image";
import Reusecomp from "./Reusecomp";
import { useContext } from "react";
import { contextP } from "./appContext";

import dollarIcon from "@/public/icon-dollar.svg";
import personIcon from "@/public/icon-person.svg";
import SelectTip from "./SelectTip";
import WindowOut from "./WindowOut";

function TipComponent() {
  const context = useContext(contextP);
  if (!context) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center min-h-screen p-3 justify-center">
      {/* Logo centered at the top */}
      <div className="mb-8">
        <Image src={logo} alt="splitter logo" width={80} height={60} />
      </div>

      {/* White container centered vertically and horizontally */}
      <div className="bg-white rounded-3xl p-5 w-full max-w-md sm:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left column (inputs) */}
          <div className="space-y-6">
            <Reusecomp
              title="Bill"
              icon={dollarIcon}
              bill={context.bill}
              change={context.setBill}
            />
            <SelectTip />
            <Reusecomp
              title="Number of People"
              icon={personIcon}
              bill={context.numOfPeople}
              change={context.setNumOfPeople}
            />
          </div>

          {/* Right column (WindowOut) */}
          <div>
            <WindowOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipComponent;
