import Image from "next/image";
interface data{
  title:string;
  icon:string;
  bill:number
}
function Reusecomp({title,icon,bill}:data) {
  return (
    <div>
      <p>{title}</p>
<label htmlFor="bill"></label>
<input type="number" id="bill" value={bill} />
    <Image src={icon} alt="dollar Icon" />
    </div>
  )
}

export default Reusecomp