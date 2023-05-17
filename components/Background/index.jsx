import Image from "next/image";

export default function Background() {
  const image = "/grass.png";

  return <div style={{ backgroundImage: "url=`(${image})`" }}></div>;
}
