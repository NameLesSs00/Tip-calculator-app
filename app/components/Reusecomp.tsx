import Image from "next/image";

interface Data {
  title: string;
  icon: string;
  bill: string;
  change: (bill: string) => void;
}

function Reusecomp({ title, icon, bill, change }: Data) {
  // Check if the bill is zero
  const isBillZero = bill === "0" || bill === "0.00";

  return (
    <div>
      {/* Title at the top-left */}
      <p className="text-left mb-2 text-gray-400">{title}</p>

      {/* Display error message if the bill is zero */}
      {isBillZero && (
        <p className="text-red-500 text-sm text-right mb-2">This can&apos;t be zero</p>
      )}

      {/* Input and icon in the same line with background */}
      <div className="flex items-center bg-gray-200 p-2 rounded-lg mb-6">
        {/* Icon on the left */}
        <Image src={icon} alt="dollar Icon" width={13} height={13} className="mr-2" />

        {/* Input element */}
        <input
          type="text"
          id="bill"
          value={bill}
          onChange={(e) => {
            // Allow only numbers, and remove leading zeros
            const newValue = e.target.value.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
            change(newValue);
          }}
          placeholder="0"
          className={`flex-grow text-right bg-transparent outline-none text-[#00474b] ${
            isBillZero ? "border-red-500 border-2" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Reusecomp;
//#00474b bg
//#26c0ab text