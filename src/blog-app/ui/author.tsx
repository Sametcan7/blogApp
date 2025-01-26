import Image from "next/image";

const randomImage = Math.floor(Math.random() * 1000);

export default function Author() {
  return (
    <div>
      <div >
        <Image 
        className="rounded-full"
          src={`https://i.pravatar.cc/
${randomImage}`}
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
}
