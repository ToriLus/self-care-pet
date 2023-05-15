import Image from "next/image";
import useState from "react";

export default function PetImage() {
  function imageClick() {}

  const [effect, setEffect] = useState(false);

  return (
    <Image
      src="/gible.png"
      width={250}
      height={250}
      alt="pic"
      className={`${
        effect && "animate-wiggle"
      } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
      onClick={() => {
        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
    />
  );
}
