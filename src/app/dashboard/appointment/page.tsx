import Image from "next/image";
import img from "../../../assets/demoday.png";

export default function Dashboard() {
  return (
    <>
      <Image src={img} alt="Nosebleed" />
    </>
  );
}
