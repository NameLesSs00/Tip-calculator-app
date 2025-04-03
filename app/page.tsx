import logo from "@/public/logo.svg";
import Image from "next/image";
import dollarIcon from "@/public/icon-dollar.svg"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/*logo div */}
        <div>
          <Image src={logo} alt="splitter logo" width={80} height={60} />
        </div>
        {/*div for app */}
        <div>
        </div>
      </div>
    </>
  );
}
