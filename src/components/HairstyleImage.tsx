import Image from "next/image";

interface HairstyleImageProps {
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  label: string;
  price: string;
}

export default function HairstyleImage(props: HairstyleImageProps) {
  return (
    <div className="flex flex-col p-3 gap-2 border border-[#D9D9D9] rounded-md text-base cursor-pointer" onClick={() => {
      const nextSection = document.querySelector("#salon");
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }}>
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        width={props.imageWidth}
        height={props.imageHeight}
        className="mx-auto bg-[#E3E3E3]"
      ></Image>
      <span className="text-[#1E1E1E]">{props.label}</span>
      <span className="text-[#1E1E1E] font-semibold">${props.price}</span>
    </div>
  );
}
